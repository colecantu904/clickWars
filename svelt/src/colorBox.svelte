<!-- Simple component that accepts a color style and applies to the button, needs better styling -->
<script>
  export let color, pb, onClick;
</script>

<!-- Make like a simple hover animation -->
<style>
    .color-button {
      width: 50%;
      height: 100%;
      background-color: "white";
      border-radius: 5px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      transition: all 0.5s ease-out;
  }
    .color-button:hover {
      background-color: #fff
  }
</style>

<button class="color-button" style="background-color: {color}" on:click={onClick} >

</button>