import { DefineComponent, defineComponent, ref, onMounted } from 'vue';
// import { noisyLinesBackground } from '../../../dist/esm/index'

export interface Props {
  count?: number;
}

/**
 * JsxDemo.
 */
export const JsxDemo = defineComponent({
  name: 'FileTabs',
  inheritAttrs: true,
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup() {
    const root = ref<any>();
    onMounted(() => {
      // noisyLinesBackground({
      //   el: root.value
      // })
    });
    return { root };
    // return () => <div ref={root}>count in jsx component: {props.count}</div>;
  },
  render() {
    const props = this;
    return <div ref={this.root}>count in jsx component: {props.count}</div>;
  },
}) as DefineComponent<Props>;
