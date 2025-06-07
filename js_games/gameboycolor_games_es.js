const roms = [
  {
    name: "102 Dalmatas - Cachorros Al Rescate (Spain)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/1jziTABQedHI9HOMpvFmMFkLybnITdOVE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "1942",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1fSy6McK-xM64F2rNM3_VyS_1Ar6ze7di/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3d Pocket Pool (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/1dt6eCnC0B_3FhGgWx6AKwZrRkbiT4X8Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "4x4 World Trophy (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1VuRc18-ZRsyhYBW3_eFpdicW2_oyp1NS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures Of The Smurfs, The (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/1hNg1_WQo30o8ojQ9hiQApS0rh7uVFEAd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "364 KB",
    link1: "https://drive.google.com/file/d/17wh8IvjutWSZWeV9AJcDsQVVEGnPNTHJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alfred's Adventure (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1awl_nUZec8CX3qnd0VBDrGLRXRY8gc1G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alice In Wonderland (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "787 KB",
    link1: "https://drive.google.com/file/d/1jYY5j6crqHmrtJ1qHo-KdJ4JCqXIO4tK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alone In The Dark - The New Nightmare (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "2390 KB",
    link1: "https://drive.google.com/file/d/1pOjiNufo6g0-CecBZBV1vKSxWkNsCqJZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animorphs (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1K6vOq35tKdstzHrhWr4pyqQm7YsKTKMz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1_6Hbipgi-fXi0idpXru4U65G1mb0vZeH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz Racing (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "539 KB",
    link1: "https://drive.google.com/file/d/1rObkUS96lqUkBx_HVJ9VGMrg6bfiokip/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz World Sportz (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "239 KB",
    link1: "https://drive.google.com/file/d/1v-FqGcM4m3mC1lIrDlMK6hrASF26J_Nm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix & Obelix (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "291 KB",
    link1: "https://drive.google.com/file/d/1jTP5ehGeSPu8nWl14TIPgMaZw9_-BQLZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix & Obelix Vs Caesar (Europe) (En,fr,de,es,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "503 KB",
    link1: "https://drive.google.com/file/d/1Oi7qaibIgVFzKIvBH0bTHL1LjRdIMLdD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix - Search For Dogmatix (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/1PKSTpo5VayvR30r7FqAlgkGQWQENnvPp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atlantis - The Lost Empire (Europe) (En,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "649 KB",
    link1: "https://drive.google.com/file/d/1ZY3igs57TZZZFfc0GI9MHNMkA_EOnjZZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Austin Powers - Oh, Behave! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1865 KB",
    link1: "https://drive.google.com/file/d/1m8y1eaq72T5riUiWH7A-Faj2hZ72lMDO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Austin Powers - Welcome To My Underground Lair! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1908 KB",
    link1: "https://drive.google.com/file/d/1t3Rx_nFsNHLQ3OQKuOBNfkkhZqmhl2Fj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Babe And Friends (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "198 KB",
    link1: "https://drive.google.com/file/d/1Q1b2ujnbXxGuXxp3JapX4oXNnGU9B-HI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baby Felix - Halloween (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1w6Fey5yFP0dTquHQZlV2VTJq7TjragSX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Backgammon (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1gugPxGY4npDXiawUcvogry_bvssFcSSN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Aventura Submarina (Spain)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "440 KB",
    link1: "https://drive.google.com/file/d/1OVQleBmNlS7Hw62VDvdSqcugtQnBH4dU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Pet Rescue (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1OdfVXUi1X5fPEXpnZwDILtvLFDHk0yIL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Shelly Club (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1uYs6T8Z6llEHFstMB6P_Meok_DuIOI8X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barca Total 2000 (Europe) (En,fr,de,es,it,nl,ca)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1tupDdMZLDmGq6AaxPhe-Dp-NUYFOhtlb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battleship",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1jjNtrgPN6AoZPFEWQlQxePb0mOU3un3w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beach'n Ball (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1tFAaTgO5O-abFWnZllpQUfjnT3C-RlW-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beauty And The Beast - A Board Game Adventure (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "667 KB",
    link1: "https://drive.google.com/file/d/1RmLbiQM58HAH9jIrWDFOn7K9CE8_Cihr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bionic Commando - Elite Forces",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "920 KB",
    link1: "https://drive.google.com/file/d/19MfvYsqZw8LXsnX3eTrBd7nNxT3UE5nz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bob The Builder - Fix It Fun! (Europe) (En,fr,de,es,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "366 KB",
    link1: "https://drive.google.com/file/d/1uWcGqHLBB7IttvrTEDhJeiUQ0lPjL1vl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny & Lola Bunny - Operation Carrots (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "243 KB",
    link1: "https://drive.google.com/file/d/1sWtQozJUYhIhn8YeCwDm820aisaOnkfe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cannon Fodder (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "2253 KB",
    link1: "https://drive.google.com/file/d/1lhBtEauX1m9heP_-xmJ1hegEpI2RmcGT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carl Lewis Athletics 2000 (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1TL1X13PDVkrJGkduw40WqRPztv9QXdBo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carmageddon - Carpocalypse Now (Usa, Europe) (En,fr,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "210 KB",
    link1: "https://drive.google.com/file/d/1yqwRssp4xMK_hr2dnZph8oVQxSCOMGNA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casper (Europe) (En,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "367 KB",
    link1: "https://drive.google.com/file/d/1B5HJWXlDN9sr0IKg1BaBX1nnJUVqYUBs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1p4wRnHtKsto622KC0PhuLrMZaJZbhgP-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chicken Run (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/19PT8NNoJoShUZD1Xgfwc-fAfAVkQvYtF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Bricks (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1XmgBaVB2wUt05Z8c5N4YhzpF4UN-bBJA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cubix - Robots For Everyone - Race 'n Robots (Usa) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1SzRIcy2byWtq6L6Cc1q6-gdh4af-lyVC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikatana (Europe) (Fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "471 KB",
    link1: "https://drive.google.com/file/d/1FCKltEMurMjVc6P-R3l_wKb5_f2OE7HJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "David Beckham Soccer (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "261 KB",
    link1: "https://drive.google.com/file/d/1B8me06Jj3mTOqUfq0R6VN6KQsKtfOW7i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deja Vu I & Ii",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "467 KB",
    link1: "https://drive.google.com/file/d/11fTHb9U8_l4rKu8VNpaLy28LeBN37pRA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Denki Blocks! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1CMDwjhZCq8ND4s6EIni-6qPhe3tGjKPd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinosaur (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/1QU62IdIaX3W2l3w3FuX7nIJ2efFlAQFx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinosaur'us (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "517 KB",
    link1: "https://drive.google.com/file/d/1Krza450_UHpbnyV6JiME0pXrJ3UIoNZA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Goin' Quackers (Usa) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1089 KB",
    link1: "https://drive.google.com/file/d/1fEfFmes6kGsh-_Ms0eoie9NKQ8Zn1KqV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Quack Attack (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1089 KB",
    link1: "https://drive.google.com/file/d/1Vz1_xD2-lH26fey76EShjdghF5tJvxWo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1201 KB",
    link1: "https://drive.google.com/file/d/1Yp2zDVfGs4Zn4P-zo0Ft9np7hYzi3MM1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Land Iii",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/1DuFdXCBVKyYlyhGZRtv4_tIkQa1XQGFC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dracula - Crazy Vampire (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1o07d3uF-a3p3TwvNEAP95vREBYdEjjz9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Guerreros De Leyenda (Spain)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/1QKBa2hAfBusJwxhXmtZPaGqb4uSSl7Tv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior I And Ii",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "502 KB",
    link1: "https://drive.google.com/file/d/1uEPI0KTAHYIsVtMy2dT55AeaA0tXyi9_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Iii",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1964 KB",
    link1: "https://drive.google.com/file/d/10Iza7faLQTF3kL6GtUuB3ft7Zr1luWpC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters 2 - Cobi's Journey",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1230 KB",
    link1: "https://drive.google.com/file/d/11DjeIxHyDqHjxxKKub-C7X2EBJfvWxyX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters 2 - Tara's Adventure",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1W-gU-SEYmVEO4UiNDX3bEbgjcSCwB3eh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Lair (Usa, Europe) (En,ja,fr,de,es,zh)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "2507 KB",
    link1: "https://drive.google.com/file/d/1_GClK7fUuppGT6e-kG2GJBhhCIW-K9cq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Driver - You Are The Wheelman (Usa) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/18Xh8mlI_VAaY9QzeX5D-xw7zcX5YTyzX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "600 KB",
    link1: "https://drive.google.com/file/d/1_YCrMnJpjiFE14Z-RoAdz5Tx6gRhS0KU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. And The Cosmic Garden (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/13DrlPpReZgCIzAQywEDE6nRYKHP7AoBg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. The Extra Terrestrial - Escape From Planet Earth (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/1IgLrzXyNKZlP2V3hS3WscQm41Eoa2Jis/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elevator Action Ex (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1iBaCIEdTzAQNrjaq2x1XqYmdBhwmQ3S3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Emperor's New Groove, The (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/16yzlx6F4Jgsh2K3Pcv-fPwNbTJqfK9qX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "European Super League (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "247 KB",
    link1: "https://drive.google.com/file/d/1zUJ2_G5UR-Z6jOqLC67Qb8tzl-v2MEDi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Evel Knievel (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "859 KB",
    link1: "https://drive.google.com/file/d/19ylK_ddYlc0AwLmHpg4EoX8LpXFXVos3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme Ghostbusters (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/17JGWQRn-4_ruG9vlHdf8ozzQiPIYkJUx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme Sports With The Berenstain Bears (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1bFHRtxi0EWDDCstm-PH0CYkLDDC4y-Ht/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 World Grand Prix (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "526 KB",
    link1: "https://drive.google.com/file/d/1uEBQT4nSa50HcuFxqm_GRZDwcWAEljHN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Championship Season 2000 (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1037 KB",
    link1: "https://drive.google.com/file/d/1ptsC7GRVUwH5JeKysvyjQciw2xUUSAyb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Racing Championship (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1641 KB",
    link1: "https://drive.google.com/file/d/1_0OTHaAs8xw-T11bazoKLpBdwo0bLN01/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 World Grand Prix Ii For Game Boy Color (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1vRRzp-S1bgqiulMUF-r4Bd1AHIDMmZwm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fish Files, The (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1944 KB",
    link1: "https://drive.google.com/file/d/1aW0tKqX--bwXg1eNUousN987BasIxMuJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flintstones, The - Burgertime In Bedrock (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/1-P8yEnjdWrgRvux_CS2ht47_JQpkMi4r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flipper & Lopaka (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "428 KB",
    link1: "https://drive.google.com/file/d/1Kz9m9yBGcEVz98voZfdwP8j5Vt64T5LF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fort Boyard (Europe) (En,fr,de,es,it,pt,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "407 KB",
    link1: "https://drive.google.com/file/d/1ajuQkyUi8objYhYvgewcobrv-P-2bk1Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "29 KB",
    link1: "https://drive.google.com/file/d/1EPjq6fKuOjeuuAXZmATyKQ1MYKVsy04Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex 3 - Deep Cover Gecko (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "480 KB",
    link1: "https://drive.google.com/file/d/1cEXbbGDBZZJ-zivocrtyAaKck_VdBm58/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gold And Glory - The Road To El Dorado (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/1msUa-oQHzNQZBDfBG5Zh2ILMMgK-hGi7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Goal (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1Da3DbDgUvZXVcIGsryuKSMx0MPHtK27t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grand Theft Auto (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1458 KB",
    link1: "https://drive.google.com/file/d/1Q5adDGcNgqErK3EP8508IoOaKwxHuB_5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grand Theft Auto 2 (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/1ZvE4R9nrOSqwzMty59M5NWnwoIHI3tIU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gremlins Unleashed (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "524 KB",
    link1: "https://drive.google.com/file/d/1gcjjX2kb31YN4bCixbP-WEn7Ddo4ntys/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Halloween Racer (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "237 KB",
    link1: "https://drive.google.com/file/d/1FVIZ4PalqEUiNUKH4fEEtu10MUaDehOi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamtaro - Ham-Hams Unite! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1456 KB",
    link1: "https://drive.google.com/file/d/1u9RMoFkaRyfnjMgdNwC9TSeKL1EtOsl4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hands Of Time (Usa, Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "535 KB",
    link1: "https://drive.google.com/file/d/1yCtMGoA9FdG62Am1n0uXNIen0DnmsF-P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter And The Chamber Of Secrets (Usa, Europe) (En,fr,de,es,it,pt,nl,sv,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "2802 KB",
    link1: "https://drive.google.com/file/d/1MECh1V13IFd9nUD94FJqeKs5aqSWpTMj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter And The Sorcerer's Stone (Usa, Europe) (En,fr,de,es,it,pt,nl,sv,no,da,fi)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "2702 KB",
    link1: "https://drive.google.com/file/d/1gJHiPoKPyz7Me52NKNLPZ7Vqoy-iK-MN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1RougtCFwgPCa9Gjro_wUofNfpITxufVZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hercules - The Legendary Journeys (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "490 KB",
    link1: "https://drive.google.com/file/d/1wijhdmouNoQpwicqLkW9YQKdKJGRje5c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hugo - Black Diamond Fever (Europe) (En,fr,de,es,it,pt,nl,sv,no,da,fi)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/1_4G1AKCQStwrALRvfbYXykigi1OrJ1yl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hugo - The Evil Mirror (Europe) (En,fr,de,es,it,pt,nl,sv,no,da,fi)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1-opqkzhO8yw4YmezM6WuTCnIDyClKgyA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hype - The Time Quest (Europe) (En,fr,de,es,it,nl,sv,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/17K30BhwB48bEEJQH5ZXG8vjeQpfgtDLi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inspector Gadget - Operation Madkactus (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1vZwkK69bmkmOgevT4TbbmU5QzHcR0Dmf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The - Mowgli's Wild Adventure (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1349 KB",
    link1: "https://drive.google.com/file/d/19gJP1Ol1FSV3tGstjttOpJF182XUNA7V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keep The Balance (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1L_0V5XnjMMh5EfE5WPhCtUifpfMm2_Oy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirikou (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "361 KB",
    link1: "https://drive.google.com/file/d/1m_QhG5h6tnEsPNPEo3WIJb0nPMFSi_lE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klustar (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/166g3LEQ-NixSuNEsWPNBm1AsmcJoiNDk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Land Before Time, The (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1DA_2wrIjeN4k0SjPUZsYTdjGWH1kpvqo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laura (Europe) (En,fr,de,es,it,nl,sv,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "491 KB",
    link1: "https://drive.google.com/file/d/1rt4YMvljMlKVsWH3YdqFYVR4osgfLnTZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Le Mans 24 Hours (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1CiL3wnyDrFX2PXpjiXQjCGn1-JkmBFhf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Alpha Team (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1NXL9DRifq72qN1B7y6ncu2tgNfKlbGnR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Island 2 - The Brickster's Revenge (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "489 KB",
    link1: "https://drive.google.com/file/d/1D2-DWJBh8xPphrKvqfTCquMF683AaTyr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Racers (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1r0w7ODEg2t4-Z5Bvd5p_6CtUwuaK4OW0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Stunt Rally (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1D8HlW0Xd7uSm8mmsrtVbJMB85BkrNIF4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Magic 1.0",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1iBIelNovUbrssE484QvC2jQh5o8TY2ow/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Mermaid Ii, The - Pinball Frenzy (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "499 KB",
    link1: "https://drive.google.com/file/d/1YCB6eg9zxG7dMvIqyPn3b_dfFqFvOBrk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes - Carrot Crazy (Usa) (En,fr,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1P2HNNnvcLqKiyuxIxPdqzfPZH728KoCl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes - Twouble! (Usa) (En,fr,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1p3udzTRDsPKnsC9GX5FJMXk-ldPWzknz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Collector - Alert! (Usa) (En,fr,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "845 KB",
    link1: "https://drive.google.com/file/d/1sOBHEQ9vvau9LL8EYa8Y3Hwgz_tzfmol/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Collector - Martian Alert! (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "844 KB",
    link1: "https://drive.google.com/file/d/1fFXoV47KQkGA7hOLsFtx5hfetkY5PrBX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Racing (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "464 KB",
    link1: "https://drive.google.com/file/d/1qS5xxihxqZR7ukeChK0kITJ-GO1WLcsX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Luke (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1tdxKpREN2YCdBy152hrnhF4lrxcqqOjX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Luke - Desperado Train (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "435 KB",
    link1: "https://drive.google.com/file/d/1sQli3QiThoVwYnSnsoDxlEIrTOQZcD0k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia - The Legend Returns",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1004 KB",
    link1: "https://drive.google.com/file/d/1bmG7VLxqJcHfga4Cm043FE1Etx2PuneI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magi Nation",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "951 KB",
    link1: "https://drive.google.com/file/d/1c2C5vb_48i1VOqC9O8fd9JcXqDsky8NQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Tetris Challenge (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/1Df0L-bveDwEZEdXd6xe_yfoBR8lQCNn2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maus, Die (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1OVce0QwMTXkRmA5-JgvG_XawRm7eaCv0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maya The Bee - Garden Adventures (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1-CMb3zy34O2X_KoJk7bWHXHgJnq5ZOR1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Xtreme",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "495 KB",
    link1: "https://drive.google.com/file/d/1jrNm9nJbbCzVCalDbiMaYE1rLqUmLIzN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Xtreme 2",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/1CbnqV5gkoMcCDfW-5w8GtKlHK0lC_5qf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Merlin (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "429 KB",
    link1: "https://drive.google.com/file/d/1frbnwCFfrqJ3yeUBIQZ1k8f8GAZQlr9X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Gear Solid (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1439 KB",
    link1: "https://drive.google.com/file/d/1ASsfgUK3li8p7Xk8olQ-Zd4Dp6pvrITB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Walker",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1UaVxNQAIrVYsRPkAuDRzIKMHVHKcV-LA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mia Hamm Soccer Shootout",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1bbMf39MFPg9HLg7nHdOzHHmBsucJu_G6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Racing Adventure (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1060 KB",
    link1: "https://drive.google.com/file/d/1unP5WU4VJKgL003XbA_PZz9ioC_ugtQE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Speedway Usa (Usa, Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1129 KB",
    link1: "https://drive.google.com/file/d/17z_-YyGOp4k9ZtmsgABpkrX95gLHscpI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Microsoft Puzzle Collection (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1x8kTbnfu-oQr4ZEbgbft647OCsy1TLqE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mission Impossible (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1VKwiAPTRodhHEikbVQ_WZY5qHvjL2b82/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monkey Puncher",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1fF84Mwz-UX0XWMDMzKaungZ1zdV-rq_6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monsters, Inc. (Europe) (En,es,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1NMhqu5VX8dBaM3CP-jbtZ4uvlxpyXt6u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Return! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "227 KB",
    link1: "https://drive.google.com/file/d/1J-AgpcBAXSVs4xUY309bfe0a9YOXHagv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moorhen 3 - The Chicken Chase! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/1jMa-JOYIPrILg4VXk_JDvfKbEBpN1Xj-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr Nutz (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/1zD9-EeHYQA4CqhcqvgqAGMDDWbHoYTAT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mummy Returns, The (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "479 KB",
    link1: "https://drive.google.com/file/d/1PnUV9Icz8a88yLS1UnunJNa_KSVxDvKy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Muppets, The (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1033 KB",
    link1: "https://drive.google.com/file/d/1EYM5V9puhuj1Vg1TZAbRI8AfISkTQePi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "N.Y. Race (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "455 KB",
    link1: "https://drive.google.com/file/d/16nuypKcDTwiDs0n8qa6ZG74XMloYpZAb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Addams Family Series, The (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "743 KB",
    link1: "https://drive.google.com/file/d/1sjhhSn-hwRxkFYEYxYTlP8pqn38gRnPf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Batman Adventures, The - Chaos In Gotham (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1Z28Zp-NHI4U86s3VqURP4kJryeIpvH4V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Noddy And The Birthday Party (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "326 KB",
    link1: "https://drive.google.com/file/d/1pBb-wiMl8jSuBKo6gN4LjECN9TfQPBc-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "O'leary Manager 2000 (Europe) (En,fr,de,es,it,nl,ca)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/19Ozp837-P20rtpdirAgetR8BoSLOnQyq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oddworld Adventures Ii (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1gZWpy3vcwqX7ZDS6J2AZOggpHGIGECUG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Papyrus (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "325 KB",
    link1: "https://drive.google.com/file/d/12mdXbDz_ZqCGOCCup-RMhSsreHSuiUhf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Perfect Dark (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "2152 KB",
    link1: "https://drive.google.com/file/d/1vi1ecfc24znyNXN90TuI85bzwVIaTtbk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Planet Of The Apes (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1YZ9FW4U32vk_HSGirHKYhJ1V19HOstpS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Music (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1-B4M-oAaTKoecC3uPOjxsX0hSOsFnmsc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Soccer (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/1h0Fd9VWmiU_cjFIYBhrySW_TEJ-vcnMY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Oro",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "731 KB",
    link1: "https://drive.google.com/file/d/1iQ7tMwfvOCfH-cpr1dMGLv4Yyt6y5_EP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball (Europe) (En,fr,de,es,it) (Sgb Enhanced)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "408 KB",
    link1: "https://drive.google.com/file/d/1JcUGCXrJm4yzX97ZDqbk_JEnkfq6EILX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Challenge (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "789 KB",
    link1: "https://drive.google.com/file/d/1mr0TIepc52dyYIIMFJuI7N3cO0GTaZ39/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Trading Card Game (Europe) (En,es,it) (Sgb Enhanced)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "601 KB",
    link1: "https://drive.google.com/file/d/11KjqCrISYMZjAkMcRaaG1tFr-7YdmVAP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokθmon Amarillo",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "500 KB",
    link1: "https://drive.google.com/file/d/1ul4mXTb5f9FSwbqLj9nHvpJXqHqQO6HH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokθmon Cristal",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1008 KB",
    link1: "https://drive.google.com/file/d/1cpYU0AzPJKdIzjBC_mw331H_vnZjVulA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokθmon Plata",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "730 KB",
    link1: "https://drive.google.com/file/d/1CYe-v2hv_Sh4THiGa8rEVUrPqpvYSqcj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh And Tigger's Hunny Safari (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "477 KB",
    link1: "https://drive.google.com/file/d/1AnRAv0GMMfCjh8ki6F_mUw0zv1fz-epp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Quest (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "257 KB",
    link1: "https://drive.google.com/file/d/1ou6Lkg80cqhNAscSxSR0AgW42zJ4Dax1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince Of Persia (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1Utsydlz9AKXExD-T6KDjow65cnL9LZ7j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Foot (France) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/1LEkoAbhKbzNJS08Sz8Q7Hmi7vZtXDg71/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest For Camelot (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "598 KB",
    link1: "https://drive.google.com/file/d/1bUs9SoiCOvZkunpHqw2c5l5Rn5HQs47A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radikal Bikers (Europe) (En,fr,de,es) (Proto)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "945 KB",
    link1: "https://drive.google.com/file/d/1m5IEhqSKsT4YOtzXSKtRy4FZtPfT7qab/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1Nt3Kyk9qmv9U4cxROwpaLnMkEbPGaKtJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rats! (Usa) (En,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/18DpP-RSLyeaNSaTrnsSidCGqfe3aYFlM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1202 KB",
    link1: "https://drive.google.com/file/d/1CHsZPZdjyW1AISnwGNdiybwY3HAaE7HR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman 2 - The Great Escape (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "861 KB",
    link1: "https://drive.google.com/file/d/1pJxu50l7mN_1pgvXPBU-oe0UtI0yPY1G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Reservoir Rat (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1UIVwh718YGphOVUPjQkCFi9DElIjtKnY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Resident Evil Gaiden (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "669 KB",
    link1: "https://drive.google.com/file/d/1E7qLuqidIn0V20dvG_sO-_Y2PuhSENsU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Revelations - The Demon Slayer (U)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1C0OtlcOR5pRMPbu-xEldhw2MiX6s5r0m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roadsters Trophy (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1kn0LyDYajZ5yObsgEra4RywhYUppEJLk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robin Hood (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "501 KB",
    link1: "https://drive.google.com/file/d/1V4iK9kklGlXp9Aoz9IfRy4l1Flg54eiH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robocop (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/1hV3Lck8x3WkQ8hxA3ezTq0Nf699Uu9-U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roland Garros French Open (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "338 KB",
    link1: "https://drive.google.com/file/d/1tTw4PVGoJVul-Xbt23rm_pwaKueGobO-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ronaldo V-Football (Europe) (En,fr,de,es,it,pt,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "349 KB",
    link1: "https://drive.google.com/file/d/1R5M8r6sP5vbg4oloDGT1PpmDnUigr5M2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats In Paris - The Movie (Europe) (En,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/112OZxrkK4_60OdOTYqYT7WBQOfGPc3ws/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate Classic (Usa, Europe) (En,fr,de,es,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1YK2_lUNLBraiVgGc_GcMu0QungEyEdlc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shantae",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1301 KB",
    link1: "https://drive.google.com/file/d/1Qb6e3YAJ4nVAgtqbmWc8erYp_c7bztSD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shrek - Fairy Tale Freakdown (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1KuOc0g8agPLM541LbMYt6yN5Q5JznSt6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smurfs Nightmare, The (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1xR3gU-3FlwO2eMRWDniYzixrK74RAsJs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snoopy Tennis (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/103anBIlwsnADfQRxDgYJhsk8PE-4ksaE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snow White And The Seven Dwarfs (Europe) (En,fr,de,es,it,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "534 KB",
    link1: "https://drive.google.com/file/d/18zAn2-0vMB39ljxiECFaiQW9XTicXSiM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snowcross (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1L0ZMX6Ey5gr52A300Y_ZuVRYebL6LP82/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soccer Manager (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1gGla-ewwFGYaqpyuZ5utQqH5e6Cj-HkP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spacestation Silicon Valley (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "977 KB",
    link1: "https://drive.google.com/file/d/1VEhHbsaY9QgONSfHwtn2zSF0J7MmrcYS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1M5NJl3ppDjJAEfauz_ZTrr0drMKyfA6T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spirou Robbedoes - The Robot Invasion (Europe) (En,fr,de,es,it,nl,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "344 KB",
    link1: "https://drive.google.com/file/d/1xCkCYqziy2s7QdktStwMwKVYGzoXUMfy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy Vs. Spy (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1V3EePsXwKcsvg6k1j1xsKeM4n9zvcDAa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Obi-Wan's Adventures (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1vG0T-pgxET54dlJ7_OVy4NDugcIGv5wr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stranded Kids",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "396 KB",
    link1: "https://drive.google.com/file/d/1KjVSbl8ONcZKepNbKRP9nrYQkixW5-ml/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Breakout! (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/15Auf3bspAXpbL2O_9Ld0aFm8kbbv1pLV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros Deluxe",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1zwnJ2ux0a9QqKMz306yhsUpfcLfAUd1Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Nenas, Las - Lucha Con Ese (Spain)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "570 KB",
    link1: "https://drive.google.com/file/d/12aIcq3NjrPs1Lv7TF_G3WL6q7XduhM_7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Supercross Freestyle (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1205 KB",
    link1: "https://drive.google.com/file/d/1Z4f3U52UQ32UVpuExdU9rOiUVzkbT_p1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suzuki Alstare Extreme Racing (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1bH0dL03dW1gN5qcc30qQfHRvToDfu7B_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Swiv (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1maq-T-IdB_4Wx-sZx6e_ca6ty1eoKhg7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvester And Tweety - Breakfast On The Run (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/17rDl0cAXSQoyDywxdIriSM6mTruI5WAl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tazmanian Devil - Munching Madness (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1F3rhDK-PEGNU1o4aBt4f1Utlo-a-8OGb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive 6 (Europe) (En,fr,de,es,it) (Destinations Toutes Sensations)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "619 KB",
    link1: "https://drive.google.com/file/d/1QWOpQAuUDVNPsjLthHr_WpqNSRDYM1SJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive Le Mans (Usa) (En,fr,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1raZk_DNnHi6ljE9A8DLl7OxcIfBRtKRR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend Of Zelda - Link's Awakening Dx",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "486 KB",
    link1: "https://drive.google.com/file/d/1pzRvdPahYeNkzH6ji1uNLvYwmHjB_Dbf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend Of Zelda - Oracle Of Ages",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "990 KB",
    link1: "https://drive.google.com/file/d/1Dq0NoZOUqe8ogq5DxMu8FINdYal8Tcdh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend Of Zelda - Oracle Of Seasons",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "910 KB",
    link1: "https://drive.google.com/file/d/1uA6yLIEf0hRJphlesB74oezijkDQdqPG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Three Lions (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/1edf-H_Zodo_rXTCPx657lUsT3ETgQ_9u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunderbirds (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/14c7BW-hWTYrwjtJIZxB3yirBa2mKhtYH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tintin In Tibet (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "438 KB",
    link1: "https://drive.google.com/file/d/1KNDlGmaEf4xyP_7rtGFGvgTmB1FONtnF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Buster Saves The Day (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/1fUIUjldHGbJ80K8YNpCwJHwgCrqq_DZH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Dizzy's Candy Quest (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1M6IY0WZpsnV5XUBfos741HsgRWMnrcJy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toki Tori (Usa, Europe) (En,ja,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/1EhZNmbnoo9JJHmfPNxmzFNKtb2G5Ylym/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom And Jerry - Mousehunt (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1vJt2fnL87o0S8vchbozDMzjBM4mHglTd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom And Jerry In Mouse Attacks! (Europe) (En,fr,de,es,it,nl,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "855 KB",
    link1: "https://drive.google.com/file/d/1r-uOhM6cROHR63lfM35FpYzEUXiA3ybv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomb Raider (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1598 KB",
    link1: "https://drive.google.com/file/d/1RnRtC2iMAjcNMdKFL5ChzxayrDTX2Ie2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonic Trouble (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1guMNOp9Ext0I-gv4qPRvtwDwCJUVxfNR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toonsylvania (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/12663eB0gk0cv71Gw25ZwHGLJ9fqLhT5I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tootuff (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/11UIkPzLoI5199sMDxXgYbaWv_2xzY7kl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gun - Fire Storm (Usa, Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "417 KB",
    link1: "https://drive.google.com/file/d/16eVt9rg8f5YwmDoQhC3UvsNeGO0eMUQs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Total Soccer 2000 (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1ze_XK7noYpsfNJQNcrBY36u_z3pLfc0P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok - Rage Wars (Usa, Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/12rPcZpVJSwLfH81eMqGTSkRXoAdY4JC2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 2 - Seeds Of Evil (Usa, Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "189 KB",
    link1: "https://drive.google.com/file/d/1D8LkZNnGiVP8CUU_QTN91Go9Zbvk0yZl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 3 - Shadow Of Oblivion (Usa, Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1MGms9uDYM2u2wNr2wt332-FvMpvS25kM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tweenies - Doodles' Bones (Europe) (En,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "334 KB",
    link1: "https://drive.google.com/file/d/1T9zsOBlK1MSYpkx-erPmHfRbRRkcXJ4-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tweety's High-Flying Adventure (Europe) (En,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "459 KB",
    link1: "https://drive.google.com/file/d/1UxQUjFHjp2rQpX28G4OfO2GWG94Ko2Vo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uefa 2000 (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1B_2Wi8ZSMnK6Jw65ninBbDtqFZ_aYDPX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uno (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/17Dk12Ol8j2-d_OpIhCsw89wS_GxBIhHc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "V-Rally - Championship Edition (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1FCTEMkG45G4mF7OFqMWbm9EM7jZStIuB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vip (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1DZ2w3SA_3bDxRIpsYvIGdG_S911LhVjx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wacky Races (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "486 KB",
    link1: "https://drive.google.com/file/d/1TNj2tcb-4TIFKedoiJd1sjqYH5eRpXh2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Walt Disney World Quest - Magical Racing Tour (Europe) (Fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "463 KB",
    link1: "https://drive.google.com/file/d/1nnwV2dvAcj3eP5SwpQ1hmWqckBZZQ-xb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wario Land 3",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1JdXVUpugHhoo9Q5aR2Uoz7POD4nBcbdD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winnie The Pooh - Adventures In The 100 Acre Wood (Europe) (En,fr,de,es,it,nl,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "631 KB",
    link1: "https://drive.google.com/file/d/1f6BjKCJKMRCyZ_HOR22YFDk3TB1L3BWF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Woodpecker (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/1YWdZlnlPZ3HdYjfJQP6Tf5UGlKRVdhDP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Worms Armageddon (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/15-cSKD6oJcpXcnziILvQyMQnMGzppK6P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xena - Warrior Princess (Usa, Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1KX-cWmR2PCx4U5FEFgh83g4doZoxyStR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! - Duelo En Las Tinieblas (Spain)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1628 KB",
    link1: "https://drive.google.com/file/d/1w0jJnnurJJnPKXOfYibl9lp7ThVGaWL5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zidane Football Generation (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "221 KB",
    link1: "https://drive.google.com/file/d/1Y6oqS3Gu3dysVsTNiEsRjvCB4PjRtDiL/view?usp=drivesdk",
    link2: ""
  },
];

const romBody = document.getElementById("romBody");
  const searchInput = document.getElementById("searchInput");

  function renderTable(data) {
    romBody.innerHTML = "";
    data.forEach(rom => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${rom.image}" alt="${rom.name}"></td>
        <td>${rom.name}</td>
        <td>${rom.link1 ? `<a href="${rom.link1}" target="_blank">Opción #1</a>` : '-'}</td>
        <td>${rom.link2 ? `<a href="${rom.link2}" target="_blank">Opción #2</a>` : '-'}</td>
        <td>${rom.size}</td>
      `;
      romBody.appendChild(tr);
    });
  }

  function filterByLetter(letter) {
    if (letter === 'ALL') {
      renderTable(roms);
    } else {
      const filtered = roms.filter(rom => rom.name.trim().toUpperCase().startsWith(letter));
      renderTable(filtered);
    }
  }

  function filterByNumber() {
    const filtered = roms.filter(rom => /^\d/.test(rom.name.trim()));
    renderTable(filtered);
  }

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = roms.filter(rom => rom.name.toLowerCase().includes(searchTerm));
    renderTable(filtered);
  });

  renderTable(roms);

