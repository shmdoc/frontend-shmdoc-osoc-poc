<template>
	<div>
		<h1>Shm-doc</h1>
		<NameList/>
    <hr/>
    <FileList/>
    <hr/>
    <FileUploader/>
	</div>
</template>

<script>
import NameList from '@/components/NameList.vue'
import FileList from '@/components/FileList.vue'
import FileUploader from '@/components/FileUploader.vue'
export default {
	components: {
		NameList,
    FileList,
    FileUploader
	}
}
</script>
