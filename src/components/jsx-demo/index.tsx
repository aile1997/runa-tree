import { DefineComponent, defineComponent, ref, onMounted } from 'vue';
import { particlesCursor } from 'runafe-threejs';

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
  setup(props: Props) {
    const root = ref<any>();
    onMounted(() => {
      particlesCursor({
        el: root.value,
      });
    });
    return () => <div ref={root} class = "swarm"></div>;
  },
}) as DefineComponent<Props>;
