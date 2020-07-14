<template>
	<div>
		<h1>Shmdoc</h1>
    <FileList/>
    <hr/>
    <FileUploader/>
    <hr/>
    <FileDeleter/>
	</div>
</template>

<script>
import FileList from '@/components/FileList.vue'
import FileUploader from '@/components/FileUploader.vue'
import FileDeleter from '@/components/FileDeleter.vue'
export default {
	components: {
    FileList,
    FileUploader,
    FileDeleter
	}
}
</script>
