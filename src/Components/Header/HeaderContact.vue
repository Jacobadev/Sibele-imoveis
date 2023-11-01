<template>
  <div>
    <header class="px-8 pt-6">
      <div class="flex justify-between">
        <div class="font-lighter flex w-64 text-xl text-black">
          <a
            href="https://wa.me/5521980621868"
            target="_blank"
            alt="Whatsapp do corretor"
            class="flex items-center justify-end gap-1"
          >
            <p>(21) 9 7897-9556</p>

            <img
              src="../../../assets/ZapIcon.png"
              alt="Zap-Icon"
              class="-mt-1 ml-1.5 h-8 w-8"
            />
          </a>
        </div>
        <div class="flex gap-3 pt-1">
          <div>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
                alt="Facebook icon"
                class="link-icons"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="../../../assets/InstagramIcon.png"
                alt="Instagram icon"
                class="link-icons"
              />
            </a>
          </div>

          <div id="youtube">
            <a href="#">
              <img
                src="../../../assets/YoutubeIcon.png"
                alt="Youtube icon"
                id="ytb"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="line-separator"></div>
    </header>
  </div>
</template>
<script>
export default {
  name: "HeaderContact",
};
</script>