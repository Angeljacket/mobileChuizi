import Title from '@/store/components/title'
import GoodsTitle from '@/store/components/goodsTitle'
import LoadIng from '@/store/components/loading'
export default (Vue) => {
  Vue.component('Title', Title)
  Vue.component('GoodsTitle', GoodsTitle)
  Vue.component('LoadIng', LoadIng)
}
