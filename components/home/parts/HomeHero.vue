<template>
   <div class="app-container flex flex-col items-center justify-end min-h-screen">
       <div class="text-center">
           <p class="text-[64px]">Improve your Discord experience</p>
           <p class="text-[64px] font-semibold text-gradient">Cyberpunk 2077 Theme</p>
       </div>

       <div class="flex justify-center items-center my-20 space-x-8">
           <div class="btn btn-primary">
               <p>Download</p>
           </div>

           <div class="btn btn-secondary">
               <p>Configuration tool</p>
           </div>
       </div>

       <div class="relative">
           <img
                class="w-5/6 mx-auto mt-20 rounded-t-xl"
                src="/images/preview.png"
                alt="Theme preview"
           >
           <div class="absolute-center-x w-screen h-[200px] bg-rose-500 -z-10 top-[494px]"></div>
       </div>
   </div>
</template>
