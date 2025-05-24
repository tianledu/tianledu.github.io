import geopandas as gpd
from shapely.ops import unary_union
import pandas as pd

def merge_features_in_gdf(input_gdf, feature_names_to_merge,
                          new_feature_name, name_property_field='name'):
    """
    在给定的GeoDataFrame中合并指定的多个地理特征为一个新的地理特征。
    (此函数与之前版本相同)
    """
    gdf = input_gdf.copy()

    if name_property_field not in gdf.columns:
        print(f"错误: GeoDataFrame 中没有找到指定的名称属性列 '{name_property_field}'。")
        return None

    features_to_merge_gdf = gdf[gdf[name_property_field].isin(feature_names_to_merge)]

    if features_to_merge_gdf.empty:
        print(f"在 '{new_feature_name}' 的合并操作中，未找到名称为 {feature_names_to_merge} 的特征。")
        return gdf # 返回原始gdf，表示此步骤未做任何合并
    else:
        print(f"为 '{new_feature_name}' 找到 {len(features_to_merge_gdf)} 个待合并的特征。")

    merged_geometry = unary_union(features_to_merge_gdf.geometry)

    if not merged_geometry.is_valid:
        print(f"警告: 为 '{new_feature_name}' 合并后的地理形状无效。尝试使用 .buffer(0) 修复...")
        merged_geometry = merged_geometry.buffer(0)
        if not merged_geometry.is_valid:
            print(f"警告: .buffer(0) 未能修复 '{new_feature_name}' 几何图形的有效性。")

    new_feature_properties = {name_property_field: new_feature_name}
    # 如果需要，可以在此添加更多属性到 new_feature_properties

    new_feature_gdf = gpd.GeoDataFrame(
        [new_feature_properties],
        geometry=[merged_geometry],
        crs=gdf.crs
    )

    gdf_without_merged_features = gdf[~gdf[name_property_field].isin(feature_names_to_merge)]
    updated_gdf = pd.concat([gdf_without_merged_features, new_feature_gdf], ignore_index=True)

    print(f"成功为 '{new_feature_name}' 合并了特征。")
    return updated_gdf

# --- 如何使用这个脚本 ---
if __name__ == '__main__':
    # 1. 定义输入和最终输出文件路径
    input_geojson_file = './China.json'  # 替换为你的原始China.json文件路径
    output_geojson_file = 'China_merged_all_cities.json' # 包含所有指定城市合并结果的输出文件

    name_prop_field = 'name' # GeoJSON 中表示区域名称的属性字段

    # 2. **至关重要**: 定义需要合并的城市的区/县准确名称列表
    #    这些名称必须与你的GeoJSON文件中 `properties` -> `name_prop_field` 的值完全一致。

    hongkong_district_names = [
        "中西区", "湾仔区", "东区", "南区", "油尖旺区", "深水埗区", "九龙城区",
        "黄大仙区", "观塘区", "葵青区", "荃湾区", "屯门区", "元朗区",
        "北区", "大埔区", "沙田区", "西贡区", "离岛区"
        # 如果你的GeoJSON中香港已经是单一区域，可以将此列表设为空: hongkong_district_names = []
    ]
    macau_parish_names = [
        "花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区"
    ]

    # -------------------------------------------------------------------------
    # 开始处理流程
    # -------------------------------------------------------------------------
    print("--- 开始处理GeoJSON文件 ---")

    try:
        main_gdf = gpd.read_file(input_geojson_file)
        print(f"成功加载: {input_geojson_file}")
    except Exception as e:
        print(f"加载初始GeoJSON文件时出错: {e}")
        main_gdf = None

    current_gdf = main_gdf

    # === 城市合并操作列表 ===
    # 将城市信息定义为一个列表，方便迭代或管理
    cities_to_merge_info = [
        {"name": "香港特别行政区", "districts": hongkong_district_names}, # 新增香港
        {"name": "澳门特别行政区", "districts": macau_parish_names} # 新增澳门
    ]

    for city_info in cities_to_merge_info:
        if current_gdf is not None:
            city_name = city_info["name"]
            district_list = city_info["districts"]
            print(f"\n--- 正在合并 {city_name} 的区县 ---")
            
            # 检查区县列表是否为空，如果为空则跳过该城市的合并
            if not district_list:
                print(f"警告: {city_name} 的区县列表为空，跳过合并。请检查 '{city_name.lower()}_district_names' 变量。")
                continue

            temp_gdf = merge_features_in_gdf(
                current_gdf,
                district_list,
                city_name,
                name_property_field=name_prop_field
            )
            if temp_gdf is not None: # merge_features_in_gdf 在未找到区域时会返回原始gdf
                current_gdf = temp_gdf
            # else: # 如果merge_features_in_gdf在严重错误时返回None
            #     print(f"警告: {city_name} 合并步骤返回None，可能是因为原始gdf为None或合并函数内部严重出错。")
            #     # 考虑是否要在此处停止整个流程或继续处理下一个城市
        else:
            print(f"跳过 {city_info['name']} 合并，因为之前的步骤未能生成有效的GeoDataFrame。")
            break # 如果 current_gdf 变为 None，后续城市也无法处理


    # --- 最后保存 ---
    if current_gdf is not None:
        try:
            current_gdf.to_file(output_geojson_file, driver='GeoJSON', encoding='utf-8')
            print(f"\n--- 所有合并操作完成，结果已保存到: {output_geojson_file} ---")
        except Exception as e:
            print(f"保存最终合并后的GeoJSON时出错: {e}")
    else:
        print("\n--- 未能生成有效的GeoDataFrame，或初始文件加载失败，未保存任何文件。 ---")

    print("--- 脚本执行完毕 ---")