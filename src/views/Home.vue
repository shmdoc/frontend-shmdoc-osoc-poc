<template>
	<div>
		<h1>Shmdoc</h1>
		<NameList/>
    <hr/>
    <FileList/>
    <hr/>
    <FileUploader/>
    <hr/>
    <FileDeleter/>
	</div>
</template>

<script>
import NameList from '@/components/NameList.vue'
import FileList from '@/components/FileList.vue'
import FileUploader from '@/components/FileUploader.vue'
import FileDeleter from '@/components/FileDeleter.vue'
export default {
	components: {
		NameList,
    FileList,
    FileUploader,
    FileDeleter
	}
}
</script>
