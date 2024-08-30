<!-- Simple component that accepts a color style and applies to the button, needs better styling -->
<script>
  export let color;
</script>

<style>
    .color-button {
      width: 50%;
      height: 50%;
      background-color: "white";
  }
</style>

<button class="color-button" style="background-color: {color}" on:click={}>

</button>