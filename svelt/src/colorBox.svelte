<!-- Simple component that accepts a color style and applies to the button, needs better styling -->
<script>
	import { quintOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

  export let color, pb, key;

  async function onClick( colorKey ) {

    try {
      // Update the record with the specified id and new data
      const record = await pb.collection('TotalClicks').getOne(colorKey, {
    expand: 'relField1,relField2.subRelField',
      });

      const data = {
    "clicks": record.clicks + 1,
  };

      await pb.collection('TotalClicks').update(colorKey, data);

    } catch (err) {
      console.error('Error updating record:', err);
    }
  };

</script>

<!-- You were looking at svelt transition, no svelte ANIMATE!!!!-->
<button  class="color-button" style="background-color: {color};" on:click={() => onClick(key)} />


<!-- Make like a simple hover and onClick animation -->
<style>
    .color-button {
      width: 50vw;
      height: 90vh;
      background-color: "white";
      border-radius: 9px;
      border: 5px solid solid;
  }

@keyframes wiggle {

0% {
  transform: translateX(0em);
}

40% {
  transform: translateX(-2em);
}

80% {
  transform: translateX(2em);
}

100% {
  transform: translateX(0em);

}
}

.color-button.active {
  animation: wiggle 1s linear;
}


  .clicked{
    animation: wiggle 1s linear;
    
  }

    .color-button:hover {
      background-color: #fff
  }
</style>