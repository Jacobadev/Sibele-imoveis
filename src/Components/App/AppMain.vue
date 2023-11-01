<template>
  <div class="container mt-8">
    <div class="mx-auto flex w-screen">
      <img src="../../assets/HeaderBanner.jpeg" alt="" class="img-fluid" />
    </div>
    <div class="flex w-screen pt-8">
      <div class="ml-44">
        <h3 class="text-lg ml-5 font-bold text-padrao">
          Encontre o seu imóvel ideal 
        </h3>
      </div>
    </div>
    <div class="grid columns-5 grid-flow-col px-36 pt-6">
      <div class="standard-forms-grid col-span-1">
        <div class="standard-label w-44">Tipo do imóvel</div>
        <select name="Selecione" id="type-of-houses" class="standard-select">
          <option value="" hidden>Selecione</option>
          <option class="hover:bg-padrao hover:text-white" value="Casa">
            Casa
          </option>
          <option class="hover:bg-padrao hover:text-white" value="Apartamento">
            Apartamento
          </option>
          <option class="hover:bg-padrao hover:text-white" value="Terreno">
            Terreno
          </option>
          <option class="hover:bg-padrao hover:text-white" value="Garagem">
            Garagem
          </option>
          <option class="hover:bg-padrao hover:text-white" value="Sala">
            Sala
          </option>
        </select>
      </div>
      <div class="standard-forms-grid col-span-1">
        <label for="min-value" class="standard-label">Valor Mínimo</label>
        <input
          type="number"
          placeholder="R$ 0,00"
          id="min-value"
          class="standard-input form-input"
        />
      </div>
      <div class="standard-forms-grid col-span-1">
        <label for="max-value" class="standard-label">Valor Máximo</label>
        <input
          type="number"
          placeholder="R$ 0,00"
          id="max-value"
          class="standard-input form-input"
        />
      </div>
      <div class="standard-forms-grid col-span-1">
        <label for="cidade" class="standard-label">Cidade</label>
        <select name="" id="" class="standard-select">
          <optgroup label="Zona Norte">
            <option value="Madureira">Madureira</option>
            <option value="Oswaldo cruz">Oswaldo Cruz</option>
          </optgroup>
          <optgroup label="Região dos Lagos">
            <option value="MaricÃ¡">Maricá</option>
            <option value="Cabo frio">Cabo Frio</option>
            <option value="Iguaba Grande">Iguaba Grande</option>
            <option value="Araruama">Araruama</option>
          </optgroup>
        </select>
      </div>
      <div class="flex flex-col justify-end">
        <button
          class="text-white py-2 px-5 w-fit bg-padrao hover:transition-all hover:scale-105 duration-300 hover:bg-gray-800"
        >
          Pesquisar
        </button>
      </div>
    </div>
    <section class="w-screen">
      <div class="text-center mt-10 mb-10">
        <h1 class="text-lg text-padrao font-bold opacity-90 font-[Playfair Display]">Imóveis em destaque</h1>
      </div>
      <div class="grid grid-flow-row grid-cols-3 gap-4">
        <div />
      </div>
    </section>
  </div>
</template>
  

<script>

export default {
  name: "AppMain",
  
  
};
</script>

