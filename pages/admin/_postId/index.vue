<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmit" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm';

export default {
    layout: 'admin',
    components: {
        AdminPostForm,
    },
    asyncData(context) {
        return context.app.$axios
            .$get(
                process.env.baseUrl +
                    '/posts/' +
                    context.params.postId +
                    '.json',
            )
            .then((data) => {
                return {
                    loadedPost: {
                        ...data,
                        id: context.params.postId,
                    },
                };
            });
    },
    methods: {
        onSubmitted() {
            this.$store.dispatch('editPost', this.loadedPost).then(() => {
                this.$router.push('/admin');
            });
        },
    },
};
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>
