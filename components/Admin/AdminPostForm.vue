<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">
            Author Name
        </AppControlInput>
        <AppControlInput v-model="editedPost.title">
            Title
        </AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">
            Thumbnail Link
        </AppControlInput>
        <AppControlInput v-model="editedPost.content" control-type="textarea">
            Content
        </AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton
            @click="onCancel"
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
        >
            Cancel
        </AppButton>
    </form>
</template>

<script>
import AppControlInput from '~/components/UI/AppcontrolInput';
import AppButton from '~/components/UI/AppButton';

export default {
    components: {
        AppControlInput,
        AppButton,
    },
    props: {
        post: {
            type: Object,
            required: false,
            default: () => {
                return {
                    author: '',
                    title: '',
                    thumbnailLink: '',
                    content: '',
                };
            },
        },
    },
    data() {
        return {
            editedPost: this.post,
        };
    },
    methods: {
        onSave() {
            // eslint-disable-next-line
            console.log(this.editedPost);
        },
        onCancel() {
            this.$router.push('/admin');
        },
    },
};
</script>
