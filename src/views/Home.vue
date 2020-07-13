<template>
	<div>
		<h1>Shm-doc</h1>
		<NameList/>
    <br/>
    <FileUploader/>
	</div>
</template>

<script>
import NameList from '@/components/NameList.vue'
import FileUploader from '@/components/FileUploader.vue'
export default {
	components: {
		NameList,
    FileUploader
	}
}
</script>
