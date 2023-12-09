---
title: 添加传感器
group:
  title: 传感器配置
  order: 2
---

# 添加传感器

## 手动添加

1. 选择`手动添加`选项卡
2. 选择`欧拉`或`四元数`旋转
3. 输入传感器的位置参数并按下`添加传感器`按钮添加传感器
4. 按下`保存`按钮并预览

你可以通过右下角的气泡按钮并点击导出按钮将你的传感器配置导出为标准的 yaml 格式。你也可以使用快捷键 Shift+Ctr+S。

<img src='/Sensor-Viewer-Doc/add-sensor-cn.png' width='25%'>

## 通过配置文件导入

您可以通过配置文件导入传感器，我们定义了一个 yaml 标准文件，您应遵循该标准，以下是一个 yaml 示例：

```yaml
- frame_id: CAM_INSIDE_DRIVER
  reference_frame_id: LDR_FRONT_RIGHT
  sensor_type: Camera
  transform:
    translation:
      x: -1.64141841467
      y: -0.445115868544
      z: -1.44456005613
    rotation:
      x: -0.617790534391
      y: 0.341020163922
      z: -0.339632090994
      w: 0.621844149431
- frame_id: CAM_PBQ_FRONT_LEFT
  reference_frame_id: LDR_FRONT_LEFT
  sensor_type: Camera
  transform:
    translation:
      x: -0.00939999649542
      y: 0.0980000132531
      z: -0.0106999663806
    rotation:
      x: -0.662252442078
      y: 0.434908515513
      z: -0.345898927788
      w: 0.50262333596
```

- `frame_id` 和 `reference_frame_id`：如果 `frame_id` 为 A，`reference_frame_id` 为 B，则表示如果已知 B 的位置，A 相对于 B 进行变换得到新的位置。
- `sensor_type`（传感器类型）：传感器的类型，包括 `Camera`, `Lidar`, `Radar` 和 `IMU/GNSS`，如果名称不是这四种类型之一，则不会显示传感器列表图标。
- `transform`：包括平移和旋转，对于旋转，可以使用欧拉（`yaw`, `pitch`, `roll`）顺序为 "XYZ "或四元数（x、y、z、w）。
