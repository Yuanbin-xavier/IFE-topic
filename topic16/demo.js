<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
    <script src="task.js"></script>
  </head>
<body>

  <div>
    <label>城市名称：<input id="aqi-city-input" type="text"></label><br>
    <label>空气质量指数：<input id="aqi-value-input" type="text"></label><br>
    <button id="add-btn">确认添加</button>
  </div>
  <table id="aqi-table">
  <!--
    <tr>
      <td>城市</td><td>空气质量</td><td>操作</td>
    </tr>
    <tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr>
    <tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr>
   -->
  </table>

</body>
</html>
task.js

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();