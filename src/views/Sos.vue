<template>
  <form class="gg">
    <div class="form-group">
      <label for="exampleInputEmail1" class="text-white">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1" class="text-white">Describe your problem:</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Enter text"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style>
.gg {
    margin-top: 10%;
    margin-left: 20%;
    margin-right: 20%;
}
body{
    height:100vh
}
</style>