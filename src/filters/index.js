import Vue from 'vue'
import moment from 'moment'

Vue.filter('date-format', (value, formatStr="YYYY-MM-DD HH:mm:ss") => {
  return moment(value).format(formatStr)
})