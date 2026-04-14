<script lang="ts" setup>
import { TitleText, NavigationButtons } from "./ui"

import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"
import SwiperElement from "./ui/SwiperElement.vue"
const modules = [Navigation, Pagination]

const { isMobile } = useDevice()
</script>
<template>
  <div id="about-project" class="main-info spy-section">
    <TitleText />
    <div class="nav-container">
      <NavigationButtons />
    </div>
    <swiper
      class="info-swiper"
      :modules="modules"
      :slides-per-view="isMobile ? 1 : 3"
      :space-between="20"
      :navigation="{
        nextEl: '.next',
        prevEl: '.prev',
      }"
    >
      <swiper-slide>
        <SwiperElement src="/images/slider/voronok.webp">
          <template #header>Транспортная доступность</template>
          <template #text>
            <p>
              <span class="accent font-bold">17км до МКАД:</span> можно проехать
              за 20 минутна машине
            </p>
            <p>
              5 минут пешком до автобусной остановки и маршрутного такси
              <a
                target="_blank"
                href="https://yandex.ru/maps/10765/shelkovo/stops/stop__9676724/?ll=37.987953%2C55.902818&sctx=ZAAAAAgBEAAaKAoSCbNF0m70%2FUJAEemdCrjn80tAEhIJY0Z4exACkj8RcVRuopbmdj8iBgABAgMEBSgKOABAjVRIAWoCcnWdAc3MzD2gAQCoAQC9ATN9JXqCAhnQr9C90LTQtdC60YEg0LzQsNGA0LrQtdGCigIAkgIAmgIMZGVza3RvcC1tYXBzqgIMMTM5NzIyMjgxMTE5sAIB&sll=37.987953%2C55.902818&sspn=0.005050%2C0.001606&tab=overview&z=18.11"
              >
                Расписание Автобусов
              </a>
            </p>
            <p>
              15 минут пешком до станции Воронок.
              <a
                target="_blank"
                href="https://www.tutu.ru/station.php?nnst=49107"
              >
                Расписание Электричек
              </a>
            </p></template
          >
        </SwiperElement>
      </swiper-slide>
      <swiper-slide>
        <SwiperElement src="images/slider/center.jpg">
          <template #header>Центр города Щёлково</template>
          <template #text>
            <p>
              <span class="accent font-bold">Всегда в центре событий:</span
              > Если вам нужно попасть в центр города Щёлково, на это уйдет не
              более 20 минут. Там вас ждут административные учреждения, театры,
              крупные торговые центры и вся городская инфраструктура.
            </p>
          </template>
        </SwiperElement>
      </swiper-slide>
      <swiper-slide>
        <SwiperElement src="images/slider/kidgarden.avif">
          <template #header>Детские сады</template>
          <template #text>
            <p>
              <span class="font-bold">Для самых маленьких:</span> Рядом с домом
              в 150 и 200 метрах находятся 2 детских сада, расположены детские
              сады №20 «Щелкунчик» и №30 «Ладушки» . Это значит, что дорога в
              садик будет приятной и безопасной прогулкой, без необходимости
              вставать ни свет ни заря, что особенно важно для семей с детьми.
            </p>
          </template>
        </SwiperElement>
      </swiper-slide>
      <swiper-slide>
        <SwiperElement src="images/slider/school.webp">
          <template #header>Школа</template>
          <template #text>
            <p>
              <span class="font-bold">Для школьников и студентов:</span> Во
              дворе микрорайона расположена (100 метров) школа №16 на 1200 мест.
              Ваши дети будут учиться в шаговой доступности от дома, в новом,
              светлом и хорошо оснащенном учебном заведении.
            </p>
          </template>
        </SwiperElement>
      </swiper-slide>
      <swiper-slide>
        <SwiperElement src="images/slider/sportground.jpg">
          <template #header>Спортивные площадки</template>
          <template #text>
            <p>
              <span class="font-bold">Для активного образа жизни:</span> Во
              дворе дома располагается баскетбольная, спортивная и детская
              площадки. На территории комплекса установлены современные детские
              игровые городки с яркими качелями, где ваш ребенок найдет новых
              друзей .
            </p>
          </template>
        </SwiperElement>
      </swiper-slide>
      <swiper-slide>
        <SwiperElement src="images/slider/ViewFromLake.webp">
          <template #header>Природа рядом</template>
          <template #text>
            <p>
              ЖК расположен на территории природного заповедника Лосиный остров
            </p>
            <p>
              Всего в нескольких минутах от жилого комплекса находится
              живописное озеро Сиваш — уютное место для прогулок и отдыха на
              природе. Здесь можно провести время у воды, насладиться тишиной,
              порыбачить или просто перезагрузиться после городского дня.
            </p>
          </template>
        </SwiperElement>
      </swiper-slide>

      <!-- <swiper-slide> <InfoTransport /> </swiper-slide> -->
      <!-- <swiper-slide> <AboutInfrastructure /> </swiper-slide>
      <swiper-slide> <InfoEnvironment /> </swiper-slide> -->
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
.main-info {
  width: 100%;
  height: 100%;
  max-width: 1600px;
  margin: auto;

  & .nav-container {
    position: relative;
    height: 50px;
  }
}
</style>
<style lang="scss">
.info-swiper {
  margin: 30px 50px;
  & .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    caret-color: transparent;
  }
  & .swiper-pagination-bullet-active {
    width: 25px;
    height: 25px;
  }
  & .swiper-slide {
    padding-bottom: 50px;
    height: auto;
    width: 600px;
  }
}
</style>
