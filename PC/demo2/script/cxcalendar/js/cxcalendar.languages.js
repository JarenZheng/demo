/**!
 * jQuery cxCalendar Multi-Language Configure
 * @date 2014-09-23
 * @author ciaoca
 * @email ciaoca@gmail.com
 * @site https://github.com/ciaoca/cxCalendar
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'cxCalendar'], factory);
  } else {
    factory(jQuery);
  };
}(function($) {
  $.extend($.cxCalendar.languages, {
    // English
    'en': {
      monthList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekList: ['Sun', 'Mon', 'Tur', 'Wed', 'Thu', 'Fri', 'Sat'],
      holiday: []
    },
    // Japanese
    'ja': {
      monthList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      weekList: ['日', '月', '火', '水', '木', '金', '土'],
      holiday: []
    },
    // Chinese
    'zh-cn': {
      monthList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      holiday: [
        {day: 'M1-1', name: '元旦'},
        {day: 'M2-14', name: '情人节'},
        {day: 'M3-5', name: '学雷锋纪念日'},
        {day: 'M3-8', name: '妇女节'},
        {day: 'M3-12', name: '植树节'},
        {day: 'M3-14', name: '白色情人节'},
        {day: 'M3-15', name: '消费者权益日'},
        {day: 'M4-1', name: '愚人节'},
        {day: 'M5-1', name: '劳动节'},
        {day: 'M5-4', name: '青年节'},
        {day: 'M6-1', name: '儿童节'},
        {day: 'M8-1', name: '建党节'},
        {day: 'M8-1', name: '建军节'},
        {day: 'M9-10', name: '教师节'},
        {day: 'M10-1', name: '国庆节'},
        {day: 'M11-1', name: '万圣节'},
        {day: 'M12-25', name: '圣诞节'},
        {day: 'D2015-1-6', name: '小寒'},
        {day: 'D2015-1-20', name: '大寒'},
        {day: 'D2015-1-27', name: '腊八节'},
        {day: 'D2015-2-4', name: '立春'},
        {day: 'D2015-2-18', name: '除夕'},
        {day: 'D2015-2-19', name: '春节'},
        {day: 'D2015-3-5', name: '元宵节'},
        {day: 'D2015-2-5', name: '惊蛰'},
        {day: 'D2015-4-5', name: '元旦清明'},
        {day: 'D2015-4-20', name: '谷雨'},
        {day: 'D2015-5-6', name: '立夏'},
        {day: 'D2015-5-10', name: '母情节'},
        {day: 'D2015-5-21', name: '小满'},
        {day: 'D2015-6-6', name: '芒种'},
        {day: 'D2015-6-20', name: '端午节'},
        {day: 'D2015-6-21', name: '父亲节'},
        {day: 'D2015-6-22', name: '夏至'},
        {day: 'D2015-7-7', name: '小暑'},
        {day: 'D2015-7-23', name: '大暑'},
        {day: 'D2015-8-8', name: '立秋'},
        {day: 'D2015-8-20', name: '七夕节'},
        {day: 'D2015-8-23', name: '处暑'},
        {day: 'D2015-8-28', name: '中元节'},
        {day: 'D2015-9-8', name: '白露'},
        {day: 'D2015-9-23', name: '秋分'},
        {day: 'D2015-9-27', name: '中秋节'},
        {day: 'D2015-10-8', name: '寒露'},
        {day: 'D2015-10-21', name: '重阳节'},
        {day: 'D2015-10-24', name: '霜降'},
        {day: 'D2015-11-8', name: '立冬'},
        {day: 'D2015-11-22', name: '小雪'},
        {day: 'D2015-12-7', name: '大雪'},
        {day: 'D2015-12-22', name: '冬至'},
        {day: 'D2016-1-6', name: '小寒'},
        {day: 'D2016-1-17', name: '腊八节'},
        {day: 'D2016-1-20', name: '大寒'},
        {day: 'D2016-2-4', name: '立春'},
        {day: 'D2016-2-7', name: '除夕'},
        {day: 'D2016-2-8', name: '春节'},
        {day: 'D2016-2-19', name: '雨水'},
        {day: 'D2016-2-22', name: '元宵节'},
        {day: 'D2016-3-5', name: '惊蛰'},
        {day: 'D2016-3-20', name: '春分'},
        {day: 'D2016-4-4', name: '清明'},
        {day: 'D2016-4-19', name: '谷雨'},
        {day: 'D2016-5-5', name: '立夏'},
        {day: 'D2016-5-8', name: '母亲节'},
        {day: 'D2016-5-20', name: '小满'},
        {day: 'D2016-6-5', name: '芒种'},
        {day: 'D2016-6-9', name: '端午节'},
        {day: 'D2016-6-19', name: '父亲节'},
        {day: 'D2016-6-21', name: '夏至'},
        {day: 'D2016-7-7', name: '小暑'},
        {day: 'D2016-7-22', name: '大暑'},
        {day: 'D2016-8-7', name: '立秋'},
        {day: 'D2016-8-9', name: '七夕'},
        {day: 'D2016-8-17', name: '中元节'},
        {day: 'D2016-8-23', name: '处暑'},
        {day: 'D2016-9-7', name: '白露'},
        {day: 'D2016-9-15', name: '中秋节'},
        {day: 'D2016-9-22', name: '秋分'},
        {day: 'D2016-10-8', name: '寒露'},
        {day: 'D2016-10-9', name: '重阳节'},
        {day: 'D2016-10-23', name: '霜降'},
        {day: 'D2016-11-7', name: '立冬'},
        {day: 'D2016-11-22', name: '小雪'},
        {day: 'D2016-12-7', name: '大雪'},
        {day: 'D2016-12-21', name: '冬至'}
      ]
    }
  });
}));