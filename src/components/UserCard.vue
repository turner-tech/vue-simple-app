<template>
  <a-card hoverable style="width: 300px">
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    <template class="ant-card-actions">
      <a-icon key="setting" type="setting" />
      <a-icon key="edit" type="edit" />
      <a-icon key="ellipsis" type="ellipsis" />
    </template>
    <a-card-meta
      className="card-title"
      title="Card title"
      description="This is the description"
    >
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object
  }
}
</script>

<style scoped>
.card-title {
  padding-top: 7px;
}
</style>
