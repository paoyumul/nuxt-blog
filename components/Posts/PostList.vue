<template>
    <section class="posts-list">
        <PostPreview
            id="1"
            thumbnail="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            title="Hello there!"
            preview-text="This is my first post"
        />
        <PostPreview
            id="2"
            thumbnail="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            title="Hello there! -- the second time"
            preview-text="This is my second post"
        />
        <PostPreview
            id="3"
            thumbnail="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            title="Hello there! -- the third time"
            preview-text="This is my third post"
        />
    </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview';

export default {
    components: {
        PostPreview,
    },
};
</script>

<style scoped>
.posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
