<script setup>
import Hello from '../components/Hello.vue'
</script>

#index
<Hello/>

:::tabs
== tab a

```ts twoslash
import { computed, ref } from 'vue'
const foo = ref('foo')
const bar = computed(() => foo.value)
```

:::

```ts twoslash
console.log('hello')
```
