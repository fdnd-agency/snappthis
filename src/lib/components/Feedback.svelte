<script>
    
</script>
<div class="feedback">
  <button id="button" class="heart">
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20.24">
  <defs>
  </defs>
  <path class="cls-1" d="M9.46,18.7C3.74,13.64,0,10.23,0,6.05,0,2.64,2.64,0,6.05,0c1.87,0,3.74,1.672,4.95,3.102,1.21-1.43,3.08-3.102,4.95-3.102,3.41,0,6.05,2.64,6.05,6.05,0,4.18-3.74,7.59-9.46,12.65l-1.54,1.54-1.54-1.54Z"/>
</svg>

    <p class="feedback-heart">
      0
    </p> 
  </button>
  <button id="button" class="tomato">
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21.841">
  <defs>
  </defs>
  <path class="cls-2" d="M16.942,4.751c2.324,1.851,4.058,3.883,4.058,7.008,0,5.567-4.701,10.082-10.5,10.082S0,17.326,0,11.759c0-2.831,1.469-4.627,3.426-6.458.74.768,1.286.937,2.034,1.156-.382.826-.477,1.612-.406,2.005.095.521.519.926,1.054,1.008.321.05.639.074.942.074,1.439,0,2.65-.557,3.51-1.575.867.675,2.029,1.002,3.393,1.04,1.641.045,2.361-.315,2.361-.315,0,0-.142-1.362-.934-2.846.792-.413,1.151-.687,1.562-1.097ZM12.616,0c-.005.006-.574.633-.955,1.696-.147.412-.286.94-.399,1.434.354-.268.799-.54,1.332-.747.989-.385,2.495-.271,4.154.772-.018.021-.957,1.148-1.938,1.616-.99.472-1.464.491-1.596.504.669.456,1.267,1.216,1.57,2.462,0,0-1.447.181-2.351-.154-.904-.336-1.637-.796-2.05-1.888-.02.066-.152,1.213-1.087,1.804-.935.591-1.968.932-2.993.775-.068-.01.063-2.034,1.836-2.972-.094.023-.869.16-1.955.008-1.086-.153-2.039-.879-2.678-1.816-.044-.076,2.221-1.802,4.729-.655.022.011.824.405,1.483.879.039-.347.124-.872.317-1.52C10.397.996,10.999.011,10.999.011l1.617-.011Z"/>
</svg>

      <p class="feedback-tomato">
      0
    </p> 
  </button>
  <button id="button" class="star">
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22.564">
  <defs>
  </defs>
  <path class="cls-3" d="M12,18.138l7.416,4.426-1.962-8.348,6.546-5.614-8.629-.733L12,0l-3.371,7.87-8.629.733,6.546,5.614-1.962,8.348,7.416-4.426Z"/>
</svg>


      <p class="feedback-star">
      0
    </p> </button>
</div>

<style>
:root {
  /*  border-radius  */
  --border-radius: 8px;
  
  /*  colors  */
  --white: #DCDCDC;
  --grey: #BCBCBC;
  --dark-grey: #5A5555;
  
  --blue: #6BB8DE;
  
  --green: #008B25;
  --red: #940007;
  --yellow: #A19400;
}

.feedback {
  display: flex;
  gap: 10px;
}

button {
  background-color: var(--grey);
  color: var(--dark-grey);
  border-radius: var(--border-radius);
  width: 200px;
  height: 1em;
  cursor: pointer;
	border: none;
}

.heart {
 color: var(--dark-grey);
 position: relative;
 width: 48px;
 height: 48px;
}

.tomato {
 width: 48px; 
 height: 48px;
}

.star {
 width: 48px; 
 height: 48px;
}

.cls-1 {
  fill: var(--dark-grey);
}

.cls-1.liked {
  fill: var(--green);
}

.cls-1.animated {
  animation: heart-upwards 1s infinite;
}

.cls-2 {
  fill: var(--dark-grey);
}

.cls-2.tomato {
  fill: var(--red);
}

.cls-3 {
  fill: var(--dark-grey);
}

.cls-3.star {
  fill: var(--yellow);
}


p {
  font-size: 16px;
  font: 'Bariol', Arial, helvatica;
}

@font-face {
  font-family: 'Bariol';
  src: url('path/to/Bariol-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}


/* animation here */
@keyframes heart-upwards {
  0% {transform: translateY(0px);}
  100% {transform: translateY(-100px);
  rotate: 360deg}
}
</style>