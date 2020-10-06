var themeSettings = {
    theme: {
        name: 'big-numbers'
    },

    pokeImg: {
        // will use species name instead (eg Bulbasaur.gif instead of 1.gif),
        useDexNumbers: false,
        // valid image types include: gif, jpg, jpeg, png etc
        fileType: 'png',
        ignoreForms: false,
        useCardArtBackground: params.get('useCardArtBackground') === 'true',
        useTypesGradient: params.get('useTypesGradient') === 'true',
    },

    // Change these to thwwwwwwwwe image paths

    imgPaths: {
      // normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/s-m/',
      // shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/s-m/',
      // normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
      // shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/shiny/',
    //   normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/emerald/normal/',
    //   shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/emerald/shiny/',
      normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/heartgold-soulsilver/normal/',
      shiny: 'https://pokelink.cybershade.org/assets/sprites/pokemon/heartgold-soulsilver/shiny/',
      /*normal: 'http://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
      shiny: 'http://pokelink.cybershade.org/assets/sprites/pokemon/home/shiny/',*/
      party: 'https://pokelink.cybershade.org/assets/sprites/pokemon/gen8/party/',
      animatedEgg: 'https://pokelink.cybershade.org/assets/sprites/egg.gif',
      staticEgg: 'https://www.cpokemon.com/pokes/home/0.png',
      unknown: 'https://pokelink.cybershade.org/assets/sprites/',
      badges: 'https://pokelink.cybershade.org/assets/sprites/badges/',
      status: 'https://pokelink.cybershade.org/assets/sprites/status/',
      types: 'https://pokelink.cybershade.org/assets/sprites/types/',
      items: 'https://pokelink.cybershade.org/assets/sprites/items/',
    },
};
