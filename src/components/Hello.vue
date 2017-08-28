<template>
  <div class="hello">
    <part-header></part-header>
    <part-projects id="projects" title="Work"></part-projects>
    <part-description id="what" title="What I Do"></part-description>
    <part-process id="process" title="Process"></part-process>
    <part-contact id="contact"></part-contact>
    <!-- <part-brands id="brands" title="Brands"></part-brands> -->
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import PartProcess from '@/components/PartProcess.vue'
import PartDescription from '@/components/PartDescription.vue'
import PartHeader from '@/components/PartHeader.vue'
import PartProjects from '@/components/PartProjects.vue'
import PartBrands from '@/components/PartBrands.vue'
import PartContact from '@/components/PartContact.vue'
export default {
  name: 'hello',
  components: {
    'vue-typer': VueTyper,
    'part-process': PartProcess,
    'part-description': PartDescription,
    'part-header': PartHeader,
    'part-projects': PartProjects,
    'part-brands': PartBrands,
    'part-contact': PartContact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'hello.scss';
</style>
