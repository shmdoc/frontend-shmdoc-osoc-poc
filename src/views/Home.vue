<template>
	<div>
		<h1>Shmdoc</h1>
    <FileList/>
    <hr/>
    <FileUploader/>
    <hr/>
    <FileDeleter/>
    <hr/>
    <JobList/>
	</div>
</template>

<script>
import FileList from '@/components/FileList.vue'
import FileUploader from '@/components/FileUploader.vue'
import FileDeleter from '@/components/FileDeleter.vue'
import JobList from '@/components/JobList.vue'
export default {
	components: {
    FileList,
    FileUploader,
    FileDeleter,
    JobList
	}
}
</script>
