const roms = [
  {
    name: "3D Gunner (USA) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "14 KB",
    link1: "https://drive.google.com/file/d/1Qe5TVwxTbv_Mbtya8_ud0yD3T2CYfOvf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ace of Aces (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1ZRLCDuiafQNeXGHEEs0LflY1s8F6e023/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/13iYtOwL0t0PHxlipmfbHket3QpBQqdTd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (USA, Europe, Brazil) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1eLmk-Q9LxexOkyOoK1pmQ8er0rD_waM3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1Dcp-_8KDxwwrX7yD61v5dioWlKGxvgY6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1lfCo8CYfGv19SwB8I4X0vQZO1GvsoUdw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "After Burner (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1Jg-C5UStdR2CCWFq9oUs6PDDkkJa5R3f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Rescue (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1q1R2-7-2SlyDKf0NoodI0mQBFEXrQtxm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1XJa3NiUnZ0ucFQNujxzf2BXV9KxrVfrE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - High-Tech World (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1PosAo_dENBiLoQE8k2au-5a9yFWnWatq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - High-Tech World (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1Pm88lyWtxA8PrcEqBpY6ifcVop9WljlE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - High-Tech World (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1UxMqpHbOXF4XW2amyKl1S7TcVu7iMAqf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - The Lost Stars (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1_7a0lomaWd6gjE4UmRwL0mg9otjjlKH0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd BMX Trial (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1SJmTuqbw4dM6yXXxa3oGBcLZnVOB01S3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World  (ESP )(UE) (Rod Medida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1PW0vxXOTi2_7Zbke-kT5D9enUSMt7qYy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World  (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1HhxWRUUzX8Bwff0RaBXmZj_osbt-hD-6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (ESP) (UEB) (En) (Rev 1) (Jackic)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1Zz64Etfc7DV-3ftoPsZnyesagolgwYhB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (ESP) (UEB) (En) (Rev 1) (Rod Merida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1H4V-cUAanz6SmtlExv0eGH0m5mzwA99d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1inTabui-XCXPbTtiVz979iKv_iP2V4r2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (USA, Europe, Brazil) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1cBK6Mx6frUQnsxnw_vz9hGE_JsqyRLt5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World 2 (ESP)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/16r0xNs0Z5dms92WO364V8-kcUi4zQtp1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Shinobi World (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/17jEJzoUD5VzKJMT6dLXxyivg2OqGIjfG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Shinobi World (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1ka0SZLd2EMBTDO7dgsQnWAM8dgy6mfm-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alf (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1qb0B3f_JP7vFxeX-LmiRYJLURfogd6k-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alf (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1lGKYuLWGmsFEQ_BIadNfZCrMQbCi0CRE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/1zQcMB_20Go0gHhOwVQUAhTmPbGE2DjHE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Storm (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1_5YNfdif5Hx8AiY2jgsM0jvDmUK7OxRw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1LSFJHwUzyhSdNpTgXe9ucfY3almMmjq8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1V4wwR2JdcgbMg_6EsOUGKi6v11mK__no/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1LI_wHoR-bZIJNrDJNKGQ7u30Nf18r3lN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Altered Beast (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1h4GsMf1fVzD6PI1HOfNCP7RQcd-j4mrP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Altered Beast (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/150dIq4Fy98AdgUSicxh282CEyLdPn_Jf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcade Smash Hits (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/14omGum0s6hf7WZnnr685o1iGb4Mq_8g9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Argos no Juujiken (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1jrOtApesOW4U5gEVXFX2Ozv6XtOKIgtO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ariel - The Little Mermaid (ESP) (B) (Jate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/17MJQBDEGRuY2zWopsb09Qcy5qMUenCao/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ariel the Little Mermaid (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1fsz_cROJFaruXeWk09o08k_vugf7s4Tv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ashura (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1jYWQfjfn6JBqlYUpUWPsGF36UL-iGgnU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City  (ESP) (E) (Pad Version)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1kTXJyojJrY06zkSa_Om_gapDUFTr9JR9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City (USA, Europe, Brazil) (Light Phaser)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1DWc2rYYdiYgURLG9b0LsBh2kxwzMKvC1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City - Light Phaser (ESP) (E) (Wave)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1DyBf2qcrelgFSDsaSorI5ryAEsTtIAWr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/11nsk2U7jBRAh3mcLUhujbqplRW4CAuIF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior (Japan, USA, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/10FjRnGD1-_BDdd_UKtz3rVG9UI1-w_K_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aztec Adventure- The Golden Road to Paradise (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1OUXMfYwx2sV3Dsck-pGK_cmImDaGPaNz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Back to the Future 2 (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1NPBUi1QZP_TMMZC5secR9NdMzWakh4r9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baku Baku Animals (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1yVpXr6rZmtTA127dFwcv5tubwrFF554H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bank Panic (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1hM7Zf6-zDWufMTt0wJVvRDyRur8FWgon/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basket Ball Nightmare (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1nWmTyF4y-hq0HwjATp7afAt0BapH7tnw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1rpIB5FRJVjRXI6ph1ytoZVtj4VzuNFje/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Out Run (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1iosObp_jaj47x4imuKBp2brDDEcAAXEY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlemaniacs (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1V8HmQW-liU37EgOlAgSeVmKwQ0OV1zoq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Belt (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1oRhTTxgwkrGiu0wbYbSONsO-EE5uZQlW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Belt (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1zqqq-EVGfCEenq5JcFqv0GCm6-6vjzcT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blade Eagle 3-D (ESP) (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1L1CVpq91KOOgHBJAGyl6XS1mVoxmhoOD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomber Raid (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1Vqrm8i7sD-rbpmRyONxICxI4PATlI6JI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonanza Bros. (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1IQt4YKvUP_UiPoDcfCrUsnrn4i49rgsP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers Wax Up! (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "296 KB",
    link1: "https://drive.google.com/file/d/1z_ftfk7UKA8ZO3iqyPVODWwaYqrcJ3G7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1QN7u4yZQ-M2PlLCHZ1hfZz-6nqm6iIxX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bruce Lee (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1cIzW3skIypo3AH_JssGooLXusOCb_BZ7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1epm_Ia0JYzm5M5wG-dYVsUdxpCvj_fAa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buggy Run (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1X5q19KM4f1X2hEAlO1kWtEeuNa12FuHR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1PpLkzTsK9fAIk2SmoF9m1KPeaW9Ihj0-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1hVS-Zs8W2mjOoxlaWe92bU6qQe1qpAuQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games ~ Jogos de Verao (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1PABuVpTA4eB7WV6n-QiIvw0tdRg6qLwN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Silver (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1tQKdqbRx3mbfLj151de98pJfIIKx-lI6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Silver (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1q70E1oKIj1pean1M9NLNBhiDNk0p6v9A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Silver (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/10XVInQEsqBE6_Enas-imOqTzjMXKN9Dk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casino Games (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1mJdeHhEPNQTaPOr_fOyBxP4LsxPGDcnB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casino Games (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1NnFjOIvhtxOIJVMOlZKtHEArsOerj4YL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (ESP) (2.0) (UB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1vQQm552i9i7cu1ccFd-Lf4A2L0wloTk-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1phgMOc5hxH1lbdZahAk9Nf32sSpeCMMA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Brazil) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/15PzW9UT-7gHMCSN8sZtjebqKCua0vjwx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1xkSzBdgo7g9rpAAj25K7EhRk-Zwo2oY9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1K7fgpicxgHb3DuuCZc43zlvUHvORSCV4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cave Dude (USA) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "88 KB",
    link1: "https://drive.google.com/file/d/1v_885uifp1FAmewTfTAmgXN32D3dYzTX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chase H.Q. (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1vxBTwxJ41J6-aNYkOYKj0XOemaCAPVh9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1zQyQnAco-a-x0eRFyKUXUp1RsrMQfcV6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1a8AScZgGGCsdtu8bRRTvOip1CxWH3_GT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1Jn4QIAqJh5a5hrJFa7e4fE9VWvuzC-j9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1veiCs1WikzV5qYLE0jwgA5j2bC_8jQXr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "317 KB",
    link1: "https://drive.google.com/file/d/1zRHk4f3rXS4_c03zQo14_eUAp2lzQiJh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cloud Master (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1PnlZyp-I4EequaMTMuZR96bZPKhTWPqB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cloud Master (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1KLFpW0inY_6qkdlSoJyCihFUdMoTDU2H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1WzOsmoHJy6RdKg1KgxXuokBnkSkrPJJ4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1CswcMfMij5ORoK9YwDmbme9VgmsicGXw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns ~ Shapes and Columns (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1cBNuXG9Xcsw_tmCs0dgHCDA5N6SGfybs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1oqULAU2OPD81YqqiY48HW1EXSOe9_YkV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Shinobi (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1Y7aRa0DcxZTwfd9diC3v-Sp5zRt65U8k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Hunter (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1EQnkjH9JFbTTQAez0Ywc2qGxSYAXECzd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Hunter (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1vH3ZNzVGEJjrVSD_MdeKB6XFiFLfybdd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DARC (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1E-9CGOPNLiUp6i44V1FWNxsAkRcHThA3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Danan - The Jungle Fighter (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1WLoQVqLdNxIXrOzUo3_0ZhJp1T_yaq6b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Danan - The Jungle Fighter (ESP) (E) (2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1wzSotVtDt1FQvmF587OxqA0vtUM8uzG4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Angle (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1LTSH72JiLv6-pW7UknhW5hAfaY4ENDAX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Angle (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1lrU7jltV2HytIwCP5U0r2Kwb66VoJD4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Duck Trouble Starring Donald Duck (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/1upKAyobD4JtnPsUe4aqBgtKBIx3wKEEP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dick Tracy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "98 KB",
    link1: "https://drive.google.com/file/d/1_LYiQ3lWgDVzv-TQ56kUPKP3eBiD78Pj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dick Tracy (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "98 KB",
    link1: "https://drive.google.com/file/d/1xJjiuocPES6WoAs0S8AxZw3OG6ZlSLXB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinobasher Starring Bignose the Caveman (ESP) (E) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1hCzpLe_z_odMio0nhxWnE6OGBypZFGMR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Hawk  (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1a92H-gPYNpjph0aWwOgP9nWQYvPiJUnf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double_Dragon (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1OMc7dUuikt3_vRzMd8rGJ3cGNs4vbgjq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1MhEXqI8kfzCk48tn5VaGibE7afZnii_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1AFdfovQjhi1hBHO4tJFCY4G2mEx3Fjwr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Dux (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1uUkbbIWNPniWGyCtYolol1CDJ7q59Zsp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Headdy (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "194 KB",
    link1: "https://drive.google.com/file/d/1fLrd7YQ5Q8PRw4v4p0qw1CaRMpOea9qC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1kUcZhZIeYRHWK7dcbKHr9efxb1ho-r8C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil) (Beta 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1RPiigviMTzDL9M15Pe1-iZuJimm0uqop/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil) (Beta 2)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1qywA_OiRsdEUPI1F5PBr9MihCUQy_n3C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil) (Beta 3)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/186MXOxzS8H1NQEI7jwFVGrY-Nza9p_tk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1PTiK7AKeX6xfApYrXhKG-a09qsVIrbjg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESWAT - City Under Siege (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1cH9ZuvZBO-mb0qtD1AOfL04hPneXmq_L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1wMHSBW8sl7_5WFDNHsKIpaT-uHCIA_4u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (ESP) (B) (Wave)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1jynA4CsYPOPzY4btghzGczGFkoCQ-_H1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1CL2iiLa2eQCynIVRWqj09Y3JU7-DvysB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/10BpdRuND5hQANQtV07Lv3VEfB2jrW8q1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1YAvfvBX2cCpqK0hRIyK07wZpGHRQzOjd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer ~ Super Cross (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/154l1NrXRuH1BYgGw0GGE2YDcmLMi-xfg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Excellent Dizzy Collection, The (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1PDJ-fTom2AsxYPe4m2EFx-voxmxzvyYd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-16 Fighting Falcon (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1CQSeECP8UHDuhVMdkOeeoA1bNGl-CjxU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-16 Fighting Falcon ~ F-16 Fighter ~ F16 Falcon Fighter (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1Vrm6631mifuWIZXgTQaDlve41ZTHO1dx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Championship (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1J6eekavES-DWdiIexchO8dtbNWbDaeGU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantastic Dizzy (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/10OojG7AY0i51bO8odYNkVUC0AaBbipcS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1C3AfcI4UO0zCpoK6onFmoomrtVehyQj2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone - The Maze (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1ChPDmsFTk0nSH3Lrw0R2fUR3YFu3fF3v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone - The Maze (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1BKZKnWWkrLD7sVouRfffgJKbjR-ZTltw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone 2- The Tears Of Opa-Opa (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1qbtU6BLMCC8_tMs5tTzbC-btqLw0wr7v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone II (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1OVYE8Xtza5U5Fy-bGKgz-NRHLWns-Cey/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire & Forget II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1eAJSEwEVHlitT_uNO5QMCc__oedkEvua/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire & Ice (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1IuWDPVK1L51FVyPmapA2zVs89mWtcZFq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flight of Pigarus (USA) (Unl) (1.11)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1-27w4XdmaOABYcaVMmfXLBeMbGzokizq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Forgotten Worlds (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1jNGMqWz5mMdtC2jSBNVsdgSvSvQ7jLyO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Oshiro Pit Pot (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1OhCxGFB1bYZvTd93-xLX5yNCFEhHFsT2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP Rider (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1zZMNclavyjTIR3OmJmEfge7e_gBi0DR6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gain Ground (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1uPfdG3YVR0gFqH9uXTKMf4GkAYkNoGkP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galactic Revenge (USA) (Unl) (3.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1sR05y4cWifDn5hPMbwAUd2KEv5e8d3Ak/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxy Force (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1-Q4rKMZ591vH6As52mbaguPIXbVLd7po/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxy Force (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/18obEAPfg2TMAz2muryIBAY616YpA6IKY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gangster Town (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1JJkXmnPQSB5pFnPXgeE0krKGwaVIrJy-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gangster Town (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1JoxF5lr1NO3CwRWgwEK-oDS6oOzpYycK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gauntlet (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/14mBa8a8Nt7pK2BN03hJ5aEn5Y8KKYBLv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1qspWlaoaaI0QaVE5UrWaVSxtdeZzhsd5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost House (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1gGKRix2HuGU3tb7V7iSGRDYw1XBUPMEb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost House (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1U1vWuqg7Q-TN-iyNDXCgEySNcJ1A-mnC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost House (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1SQn97QuMNE3GxwPJxHuurjf0mvYz1lua/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghostbusters (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1xcjGprIQxDath5eKI_v-XDAqklVohljz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghostbusters (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1jveAkrp93tP6-VSjkTqq_2r-Oe8U-HQY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls'n Ghosts (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/160GzqmMI9puDC0xC-cCSNnfcwnumURm7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls'n Ghosts (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1yguKj3TZ4ZHfIeWeOJfqTkaaAqDzAaNa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls'n Ghosts (USA, Europe, Brazil) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "10 KB",
    link1: "https://drive.google.com/file/d/14eFzuoNT5587GDLAiJH5GSf30gmAlHpH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Defense (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/1Q3kP4OYrFiqybzgXieDzw2lPjZZsUMKX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Defense (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/1P4aoSisuUdjEPS1EyvMbIvIhPDALsTQA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Defense (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1WZN1NQcft-kX8-ypK6tKjqXLNumQcVq9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gokuaku Doumei Dump Matsumoto (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1GceO9h_I7htTPIMvLgMGqW38LfMZsPXu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1_lbmvIDUWvCBqbH9H7c4FZF0r6C6otJg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1GWgIBbFEe2o-2nICoUw1kNkuOHwKX_Dx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe Warrior (ESP) (UE) (Pikachumanson)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1nvdyuSgKqzUI3-ccezrk-QLJNpKbRVgX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe Warrior (ESP) (UEB) (En) (Jackic)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1CiMZjcaGrLOXeB6K3FBW6KX_rkXHdQD3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe Warrior (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1POd-uP3TqhZ2h__3SBmKcnVZLspc137G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf_Mania (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1vMw7agmm10vZlBuJm55vPz8Cn9Dh8Wiu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golvellius (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1qrskOVVQnlwY5zDJnT3RGJGlgH-Mg5fK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golvellius (ESP) (UE) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1Bnq6j4_6Vcdnh_maabnaIPyqSqYwVuBe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golvellius - Valley of Doom (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1vetD4_Ee_cPRuNGQ1ZkyALS8g1rYShxv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Baseball (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1eWmujB4GlrCogSp7U955WOVIkbYELo_u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Basketball (ESP) (JUEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1bgOgUZcDV5p7II0UK5gS1LTtaEophwsw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Golf (ESP) (JUE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1_kqSBjtGiRyYWH2vbx6A-tcwRTA7Xh6K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Ice Hockey (ESP) (UJ)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1fI3a4Cu2EemOa51rHfj5KDiXVyWAl9PX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Ice Hockey (Japan, USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1OOJRzTvX8ItlKg0oktsKMakhS-hOJT8D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Soccer (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1jUNIukbT_1SfetixeYAIdI05ugRlkPgX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Volleyball (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1kpplzIBo1hKNdczra9Ic6Y-cyx-mFBFP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Volleyball (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1hddAu6idxApujggDi_SilfAlpl7I9TXd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang On & Astro Warrior (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1Tic59awd6nxBOQhePgHpNEPJlzYtYCNd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang On & Safari Hunt (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1WE-X3jpY6eMr366u5-dbhHBtPp_tFpDI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang-On & Safari Hunt (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1oajBzoviyDGzZ4Uzsuyu0QI7oapioza-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang-On (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1ULu7CUNG9myO2B-MYckmJfk48p_0m4cn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heavyweight Champ (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/14mgUsYmWabMWy5KJEPi0fGrz974yTyhA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heroes of the Lance (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1rFsO758HtG2cFKz5V5AySEshrmAHejl9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "High School! Kimengumi (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1D0Y7jicNF3DGXGq3JVCNfpohSNeZaeXS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1qKwUASMQyNmcJUxKUyVJoP2njectMj1K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (ESP) (J) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/171dXBNdPSwtEZE34-l5R-ViIBO9bH4Fz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (ESP) (J) (Jackic)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/12Qx7S4L-mtzA5ZkFwxu_SktSTjX1MPmt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "154 KB",
    link1: "https://drive.google.com/file/d/1objqgcaa06nH-0svirlyOeQwe4HYUriw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook  (ESP) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1CJO9z8fWOLZdKoNpC0Dqkl5it8pNULL6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1p_LIJc7o8y82vkGCgcLw5_fzEq6Bw9gG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Last Crusade (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1Jkxxe6Hn_kZ1HxEEYKFJVEsb93rPq1DW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Last Crusade (USA) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1qH3pbE3lKhNgRRo2Ncx4wBaaiigMPxxG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James 'Buster' Douglas Knockout Boxing (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1JE6RtbNLu6iYU-F_S3rPInfqbSLNARH0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James 'Buster' Douglas Knockout Boxing (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/16cebiEWUVmBvPkttiBpXC_Tgo__uKzcl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James 'Buster' Douglas Knockout Boxing (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1iUjKMOGbwXdMh3EX0I46ZQ840CYfc0no/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond 007 - The Duel (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1KMOLTgH4X5-hEBRMva3x8upeh-taJ75b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jang Pung 3  (ESP) (K) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "494 KB",
    link1: "https://drive.google.com/file/d/1kiMcFEBqWTYwetOASvowSFtEEp0G4ARq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe Montana Football (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1u9fN2M0C7U0U8YSris22Ek1sUTMLcFXh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1pBqUcn4kHghtcoOtY1PcofF2pZaFfKgn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kenseiden (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/13Srz0RTKLyMiUfbaGnTYkYAocCFPwr0j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kenseiden (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1rdle2AK7jsWCqklKmRZJjnayAWhhYEjx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King's Quest - Quest for the Crown (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1gaXd-9h6AeudmzcqT1GY0gTa5Sw6Kpv3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King's Quest - Quest for the Crown (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1_RcX7RNz-RrDbaeIJR3G2qv9OplZP8eb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1iI55h5Gmr5IhoOvNddiE_GeLq-qPB1Hf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Fun House (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1Gy30_77ql63uEOZ8uo8mP9VrRBO0sl48/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Kid (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1WbqqGp-C3cGQRRTK6H-JZNjimVVyj-X6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Kid (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/17P7wBsd2qrvtcbfHl8ymfRU-aPB2dB3k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laser Ghost (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1Jf41gngT-HbQ4iAg9Z8xQ5Yw2nJx23rb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/1nkqBPr_xDayFK-LDag5H99B7mbmm3FRh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings 2 - The Tribes (ESP) (Unknown) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/1olNTou98rIf374wTlStlgkY_3BQDWadp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Line of Fire (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1r4jYA6rJbcHs9dFxP6WBRFHuAc2K58E6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of the Sword (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1NwZvoKUmJ6CA-WEfd5bO7DHaBoY1nXOQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of the Sword (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1EU-bMf0lCXxAR_b8gJm91S9nHe4zJlvU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Machine Gun Joe (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1feFDrqOGmo2w7HSZ8ofS6fl1ZmnO4d1g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marble Madness (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1LwCLofnhG9canSzfVD60GRY4HIhzuL6Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marksman Shooting & Trap Shooting & Safari Hunt (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/14Ai195uOcSzYZozTh9rRK8EGfIv8dXMQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marksman Shooting & Trap Shooting (USA, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1DF7vd5no6HcdiLb87SFZezaAj1fUQYL2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Master of Darkness (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1nmfqtoC6SKihPMzF3WGRXGGMYRPIfKhb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Masters of Combat (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1KC6RUWYgilJEAPmiRcSUu2HGaHhsBk5t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maze Hunter 3-D (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1GMvLIzUGPgraXnSQzoCJOBbnljRN2MsB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maze Hunter 3-D (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1gAN7kn_B_S9Jqqo95adLgH6p5fMOwQxs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megumi Rescue (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1snItTWK_hWrv0p0xMslV3imVuWMe9pOK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mercs (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1GtRS3yunSBNoOyDvs5Zi-lQVJ9cBM5s0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Jackson's Moonwalker (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1sMh1g3FkLSqmUtSy8AKhkjl48T8FN-s5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Jackson's Moonwalker (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1ZdjfAblQZUqVZLnkSM1V4zpTGgyvgFL9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Jackson's Moonwalker (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1DcXX0XhmvJxU_CFkcaltq2kz8qqUpeS_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mick & Mack as The Global Gladiators (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1hnxIICGavOtgkoq5fJ1x9gsPJ0XryVxD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mouse - Legend of Illusion (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1jClKpOplihLIg2s4R3Z0QrfLtJuMdZyi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1C5l1sWR_WbMMKm9_NMUxcF1U3FOT_W6G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miracle Warriors - Seal of the Dark Lord (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1u0vqXrxAjU0lGAykRuo77zZ0YNga4bmi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miracle Warriors - Seal of the Dark Lord (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1Mm1XKoV2msZfu5zlBnRHpeFrJm6j53vv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miracle Warriors - Seal of the Dark Lord (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1OeZV7gf8414fvbugtOTviOe3Tvq2Maop/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Defense 3-D (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/10tYiDtJ49T0i1V7McDsgDgiBImk2np5l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Defense 3-D (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/12ldD-GLAb-G7IDI_ffXY59OlTryUdxps/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Defense 3-D (USA, Europe, Brazil) (Sample)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/168HVpK2gn6YCrwFz8flb7sq1AGjJ6ZiR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1vDm52Lj6m4FBiphwoCQgesfiMHSEsZAf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1YiYr1piruKgRXOQTi_53Obfdif61uAQW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1bvr0xWMVn9UHUSGLofJm2Em1dtzxpmWb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Revenge Featuring Panama Joe (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1FpY591RgavkipAJfi23of_rUVN7UKsCD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Revenge featuring Panama Joe (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1Mos1GHNKgqLyfm10px_lWa6xDSTQf1_p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Revenge featuring Panama Joe (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1A593sRckOUAuIsG5ScdEC13fBV3dCvGr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "373 KB",
    link1: "https://drive.google.com/file/d/10cunZaWg4mFMSw5-HWROPKn9sfcSkVk_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat 3 (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "264 KB",
    link1: "https://drive.google.com/file/d/1a09rbJ6j_CyqvA1DYGGYxZ5hpy3r3PCQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1n8K_ypYorVr521L240MHfRwyabPI1agx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1XqQ3PfEKYImm1MtbfBu7a7euDgOZgIfq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "My Hero (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1wKWJiD71smOOyMrCi67eggidxF0OD5sJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "My Hero (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1KPl7Ac2Fn77nCitE3Iegaj5aW2kzNEq7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (ESP) (E) (Prototype)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "228 KB",
    link1: "https://drive.google.com/file/d/1nevqESlqVaqSera093MYrlvRyfch-JZV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1kGhmdPSwSw99w2Enr7X-sRh3B4opfqyf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (ESP) (E) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1BW9wIJHY7RKyUWG7WrIOYsVtySrE72Id/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (ESP) (EB) (Pikachumanson)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1j76xiCI7Hmda8DQ3hebdZEtk7xMCLb5B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja, The (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1OFZ7mr7geStg-zYey0UqksHEoLWc-j-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Gold (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1oUHBini-q52exU1Esaxy8UsnsO-PC9C6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Gold (Japan, USA, Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1p-KoX7z3x-ZMYbP-35D-BSNcNvFc6Iwt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Wolf (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1y85qGQ_HGz5CpX5MeMA65kkoWdrhITD2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out Run Europa (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1tzG3_rruQx2iFnzEAw017G_ZsTiBZwox/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun Europa (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1gxBlJds4VRZzCJoYm0fpbOeUzuIY-YWD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun Europa (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1buR56_oUokWOMR7oXHbxeqCHJWXPonIc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Mania (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/11m7vsea3OA3hEVFvOZG-90qIhme_kE7-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1WLWV8ItQt42JlbqFnkZ-RRNbgMUkdvc-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (USA, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1X4dhDLk4BhiRBZZSQZsjMtxY1C51Z-wG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parlour Games (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1LiaFs0YACVroUWnKnF6FLMl9cupHwW0n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parlour Games (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1tQATkxYKrpYSWpcmZpyfxqDmMUduDbWG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pat Riley Basketball (USA) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1aVBwCBk1sWV-Yfd_loD5W6VOTL0VrVLW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Adventure (ESP) (K) (Unl) (Pirate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1LfuTlotMg2jplqgA_nXqX0tfu3-x3QG1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Land (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1y5BQDAQFxyXrP_4E5bEKKgg46zsTB-vK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Land (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1Bm6NoeKU8qQEf-kQcWNx8CiaiodOz_ny/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1Pk3Hcy1r5EKr4WinCbMcH24_eltEzg9x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (USA, Europe) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1rNfgfD9caFDw1Zii7AHJlFiEoHbManWI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Platform Explorer (USA) (Unl) (3.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/16b-H1GYyhlBS1RbR1LU8ozN2pDwlvkpn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/13PGJl6Uhmjsw0QWrly0CyRZxMGdl2vPZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poseidon Wars 3-D (ESP) (UEB (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1E_1v22opGbpbQSpi3Cq6NSgYGtK1iMkO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poseidon Wars 3-D (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1DCCWQGMZ96czIKjDyRFsbOW23JImI7dE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Positorb (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "19 KB",
    link1: "https://drive.google.com/file/d/15kTeQxSxbGt3MwiSKpjwU7yjNE88jakO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1jY81iqtpXm6Nx7FVa7onpOG04m1Z9oTq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1fs76w_LM57r4gcr8Wr0NNdAWZzsUoqSU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1LJnvn1oLjoStT3cVmB23E4i4tlL-xUEt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Predator 2 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/19y9IW0Jkvurug5pBLKbPmgmUccTOn-HM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Predator 2 (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/10J3sRtzrQim0-IJYZ6CnKP-3fu1N94aE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1dxgYdEHfIevE6AGDZAcC6u6FQVGySWbV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1dw46vcHXHwTAYtnmweuqpwMKpwZikymF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prisonnier II (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "10 KB",
    link1: "https://drive.google.com/file/d/1RDCMt_UeK7XoZJ410NScdF376IgdERSj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Wrestling (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/11bv6CAvU0QvIS_ytLNHsj10se3FRPwV1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Wrestling (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1DaN-CReJ7uHaF8KhRx0KkihKQtq7RGFq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychic World (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1BZhggsOR2vPal8CKC8T0PiPVzKOfWeP5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psycho Fox (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/14639WfcLpWz-5YFzSKXyF0sCgYbyL2Qo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psycho Fox (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1E0pL0SCr3TOIh_WGz2yx46kjQ7a3nryY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Putt & Putter (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1LklBI21M3f0mku4vILt-_MmEx-PYGNFc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quartet (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1PCTTv2Xyki9PpRcRmi4ROr9tWlpwRgXy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quartet (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1CEZgod5nNXMM62z4f9Z1SMPdHyPbsnuJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest for the Shaven Yak Starring Ren Hoek & Stimpy (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1t8Sp5oauYp4J-LstHfqD_FRe0KdPkAcK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1wEgC2YAuoy6gqQ7SEGcwuNT6lke5tcJC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.C. Grand Prix (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1Q6o-J5O1hbI-QtIgaLcatdZDqGpzho8p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.C. Grand Prix (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1pP9749Kl96wwL7tMOVkvIEKBZVBkJI-4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.C. Grand Prix (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1UeHORJUMVTjx2cAc0N4IGmkSklCtkToA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.C. Grand Prix (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1PqPkCIdSEukuCeBaDMAaBvssidsikYYb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands - Story of the Bubble Bobble 2 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/1eorFfDcEBvDuO9XXp1Qx8mmp7Y_ursW0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo - First Blood Part II (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1OIqKXwq4l4cVAJeEfxtNzDGP1K2lDZ9z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo - First Blood Part II (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1Zp9bS9b0__ATGxPgvFGZm3fkdfFLkzdr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo III (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "120 KB",
    link1: "https://drive.google.com/file/d/1DoCCNcDlVr4UuXyDzTPpi73uiNKyaQ-y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1IBAKfG_z2Xug3W2Z3X_IEXcf_2uEFKIG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1GJNu9DJYRwgnG6bu8z6ePqOZIfwxRhfl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1GjtEIpBSNzUDnIXrxU1Pm3tRe28lxFss/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1JmeEjcwdZFJhya46lng2f20RvWM4qEPx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Reggie Jackson Baseball (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1a-DQZPYLNlV81QwdyrtGRcHl99Ke-Hry/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Renegade (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1JSLz5Jaom98AXHno_RXJZmXZ_0_jE1yM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue Mission (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1To8KhNHTToizlgJljPbmY0wbytX5RpvN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue Mission (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1674YZ21da1ok0YDuhQHKPPA2E1cU-GSM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1USd_Q5NfNsKt_6yGDexFK6ydcNVpaXWr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1iASoWzj3C_kd_VGrXkUiS_0tn7jdZqIz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robocop VS. Terminator (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1VTofZAdHYO7W2WFT9Hf6tOI8Wh4Z5keg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1MdgHfx8xWrljtN9wKlKOlctB2whs8e41/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Running Battle (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1St20E0GVwVe9WAtMSHtI190KEVTOeNw0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sagaia (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1_qPZiKYpYpll0k_hetoAxJWtxfvicIaX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Satellite 7 (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1EcDSFTOM8uj1bf0K7sG31adaxq29cjrA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scramble Spirits (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1W_BptSEVmZ8wC3TDGjV4Uv-fzDfUthPQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret Command (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1sRQxB3ZWeOZbB18YmNLIGpXiwlF3pK6F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega Chess (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1QZfEy-omTt7fW0IalRnIh_qcF9PuEfUE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega Graphic Board (USA) (v2.0) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1IMWRfN1YCjFGLNNOZg4b7WPb4WZHyBU1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega World Tournament Golf (ESP) (EBK)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1b3iUs0d5KVcsd8u3UbphLR69QE4M72gv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sensible Soccer (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1FtO_I0RbuYB84t276oXtqekTYVCChw86/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1vkXAZMiZYU_yzfx1QKkLdVAQojzL5g_I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (ESP) (EB) (Rod Merida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1SgsoNrkn2V7shv0_Aihfnv2IKf6hY21w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1zZH_Potm3jljEuV-72Wgpiyv77RD9mCH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1VuFnlefnoeuRGimjHWvaKsCgcQivzK3z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (USA, Europe) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1b2VLZtEG33Whc6XM69kcvtN0u8VnlP2y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1ECMiTGMz4dHibqv53ZTScUMI1DeEPaKI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (USA, Europe, Brazil) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1DAVBNjt5PLsdRonLGefcVUb02hVk9NoI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shooting Gallery  (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1YKHRoaY--uxEM-CCd18cS5eeEggfRd4y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shooting Gallery ~ Shooting G. (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/10A57J93YrObZupFZG66_TdcogmWJOR5d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silver Valley (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1MYN96x1EEA8oRZXv-LZ15cs5hbc2CJZn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shoot (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1FCnPMSDtUskfRPdUya6R0sJtIwZRCFCW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shot (ESP) (UB) (V1.2)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1aEnerMT5B_fe-MlUFyUSu6yWNmn2Aty9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shot (USA, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1MaJS6bTY7fDrroaAUdA3NbXu-VDj9dQ5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solomon no Kagi - Oujo Rihita no Namida (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1FR1HdqZugvoSMK7PEEtg1fesh9nQrHQQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Chaos (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/13PHWI5EVwetqYpOU0X6D9dFKgxQiDlZ7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1S5_gXQqZpUFhtDJQH6W_tvmF7GkAn5GT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1i5NLF-08j1gMUseh4BrUhxwSTaCrEm7e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2  (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1ezuI2t6pe0rEJolSC5ylnOjwLDoXPdEw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2 (Europe) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1ou4LGZI5hYtvo6e5Nk1nASWzIARCggE2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic the Hedgehog (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1ikCX0B8saWjHxy9gbO0eRkIyOa8MkptO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Gun (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1kxsmGJhRJ_oqFuw_nq7VPB5Hy7fzMH8l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Gun (ESP) (E) (Rod Merida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1v3IVJO-xk5IHdHVWTGbNkF-EgxEQN8j8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (ESP) (JU)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1hkGm5x4lEflPLD5CcJWwpQYiRCPVAhKa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (Japan, USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1xSOPlC69aQpe8brTjx3Oo5o3BQHh3DSu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier 3-D ~ Space Harrier 3D (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1tp7I4zWloE5od8fZ_a4g02lLMucsQe5i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Special Criminal Investigation (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/13yM364VOo2w8lE3V_9aGwFwlIF4uBc1W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (ESP) (E) (Virgin)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1f4_JIyM02LOCzcgxgn_ia1mQzLtSz2XK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball 2 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1CR_vfHu4WhWPC8f8X3zvQ0g6RY6bZdQC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpellCaster (ESP) (UE) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1xLh0Lwl6TTxlKTI-oWPZVCb1BQyIN8LU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpellCaster (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "292 KB",
    link1: "https://drive.google.com/file/d/1yh7hY7KSfb_BR0i9xtTNnBF2pA423tE3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1p5KZ_eOO7J_iNxPGzFIXphasRpTybPwd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-man vs. the Kingpin (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1TJjWSuJymxTvwqXpoOBl3uNdYKjFbWdc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Pad Football (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/11pe2fy32pfAZm-ktodZbQfJuZWg9xPTx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1p-sJ468aa_nMrdryHw0ZIEC6-JP18a01/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs. Spy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1tq-x2ar1W32GuK-Chlg-KK0j8n59nZV8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Battle (USA) (Proto) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1oliw_nzoEZUAce1bAWRDTrBNEDsbllXw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Hero (USA) (Proto 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1qdeLQuJ_VE40812kQE8ujWlLxsF9Epm9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Hero (USA) (Proto 2)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1uhvARXe_skUalV9LoUTCKdt2ka3AlGdg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1qxoaxnA9yFXlrD7O5txKdAfGw7BgtNoX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1g-qJBe3RIbiiwDe1e-Gm5kg07zwa17Vu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/13-8aK1d_h7GIcJeFwTOWAaGo0GnmH1bJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/13eMAnNI5jWtqD6sIQf5QV1G0KWR-WYxy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (USA, Europe, Brazil) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/16xrOHUFS5YFf3BU0dmxtcCRfIWTPvRgY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider 2 (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1ZgpD-BwVar68hd4-JuIgvNHwg3-9nbtD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Submarine Attack (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1Ubw5F56wuZ2VsivDqfrjUsAk1nXVidhk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sukeban Deka II - Shoujo Tekkamen Densetsu (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1YeD7VRCkIdDIvwjravuzGupRoZTRfryH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Summer Games ~ Jogos Olimpicos (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1kcFlqYkZ2087GsNbN9Bk40EaADN0uL2A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Basketball (USA) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1stC7-WMCzVNZhEQgGHW31YS6hpzb5TUO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy 4  (ESP) (K) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1DuykmGjmQrtOFo7Kx8eKdgFSpqe8DsJS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy II (ESP) (K) (Pirate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/158iLHJVGQP_f93NCadC0Hlnn8nv2-uvD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Kick Off (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/1e77roC9-FVq8YyEQ-5hIuFjRI6icryle/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1pQWR1l-9Rp_o82xkUDWuikizMbfEByfI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1Ex546julO7dhUC1Hb397tHWD7leInjdV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (USA) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1erE8sctB0Oi2vZmBHDmBOP4nMZw64gUu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1epLEDOp21i6shCkcccvmbTyQYBVdcL3O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Racing (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1PSDfAgCf2VuK0_9fma8lFIDwIw8ELq00/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Smash TV (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1xDCc_ReQ42ocv6B7YPWZZy-8YhTZBppy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Space Invaders (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/1yaw4KE_scD_tTbvl80XfhrUHBKwGM6gy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tennis (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1_ByzSSBKVjLqzs69pZqO5Gh89PYZwbmD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tetris (ESP) (K) (Pirate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1q3_cur2kY1A2gI8UMi01isNPOj7vgfIH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Superman - The Man of Steel (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1Jm5IaS9pAvotghI0HYR33REUtffrJhCi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1PZPoxg7hR38OsqDC8CBRd8S6whKIvOZQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Chase H.Q. (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1sFuOpsO16FPY0JXK0OlHZuG-IsdZRywd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz-Mania (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "101 KB",
    link1: "https://drive.google.com/file/d/1GR55xKclDtAz-QHhQunq1QgCWJGAVXTJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo World Cup '93 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1U-LDtCxafHHpbaYYHwGtwXtGyLnhvrRc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teddy Boy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1JbBbJNIgknPn9XjOWuq9aOW3qcRestbv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teddy Boy (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1I08nB0PMmEdAgmNyX9RDEgDCTzye4k6-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tennis Ace (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1pUsj8tZZ_nTSX62IWIT9-8tJAcncym59/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator 2 - Judgment Day (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1KlufosWG_KW11Ga7kBZi1oO_yCipuFRe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Addams Family (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1vGEDQUFwAr83rEh5Z0Lu_f_AY9y4Nu31/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Flash (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1hufBvyxuiXiF6H-D-NJ-hEiX8V0CGFRI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Incredible Crash Dummies (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/10gciCi5bZTUrK1g6OVzB0y3pLKknQwAi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Incredible Hulk (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1wX-3_SsdwIksXcLzHWMMszIu2RSj2-ZY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Incredible Hulk (ESP) (EB) (Wave-2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1rqQHYr5cesF_cm42e7S8thmyWIR-fLp3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Jungle_Book (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1LivosTI5Qx6TPCHKzBMWdYWYXBRezoMT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lion King (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/19V_zdqSt39qexX_Ddct5KWdTIYNm4gWP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lucky Dime Caper Starring Donald Duck (ESP) (EB) (2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/10qQavzYEmJr3GuOZSLUx_JhVOi3ofAcd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The New Zealand Story (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1dvY74WhMI-cwuvSbQHD4OhG0zE_DQg8N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Ninja (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/19jrTbwFHVEuc00NhzLEwJjxvgLCOGGTX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Simpsons - Bart vs. the Space Mutants (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/13Z9k_5k4YAMpuGvnWLaf9NoKsMF5eRXD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Simpsons - Bart vs. the World (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "165 KB",
    link1: "https://drive.google.com/file/d/1w0rDj5tzYCc_W_0YkELRXn7ObxjLqBij/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Terminator (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/13ztRBNKwaorXPO0eu3CIUU9JAtd3q1SK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Three Dragon Story (ESP) (K)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1L3drVbdzfDMYlpk2c2ZVRrHgZU34Vun4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Blade (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1Xvm-3GfKOzVlwP1oLPo6Ks6XJLGUCSoz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Soldiers (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1AE-Jyp7R2elAQKDjDJiW_sk8xuV4StqS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Soldiers (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1qIDgqsh3VMHWrG4kpcC5VLtw7RbhgNCu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry - The Movie (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1o4mlyRsbWBaOngu0cP3T0BohXbeOSxyh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toto World 3 (ESP) (K)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1nn_UfFRa_R6rbYkLcXfcyDlNRHYD_31X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TransBot (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1MAoDrKAE-_NUZ4bm5hLJ42ZRUn8xv1Jr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TransBot (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1VRkk_NxMo5ejNlWRSgwQSCNNIemJJ7M0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TransBot (USA, Europe, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1IdpiIfnWFUHlF7cu0QGvNsHSKvrsiuNY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vampire (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1Nl9uKbIoXv7OZRJ7YmI5B3tu12okKr9e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1t5bZLPHyFPQSb1DPTWjuJJ-rH1xODSB4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (ESP) (UEB) (Wave 2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1qnaiFBNe3s309ddcSFnguwsx5ziWgJ0T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/14IoUrHqU0RDkJfrPYvMZ-UAjHFUc8-11/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtua Fighter Animation (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/1NulHidKOYM2feX_ckUxgDijEOuwq8YXO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Wrestlemania - Steel Cage Challenge (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1VLCMWXDkev33JiXQ8Dho7Doa-d9ulEfs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Wrestlemania Steel Cage Challenge (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1ToCGEw5nrhDa_wNEwRK8rdZcqcoetGyy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Waimanu - Scary Monsters Saga (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1Y3ZOAtqmQay2WPynzu86oQSQ4TQ-wwZf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Walter Payton Football (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1FuNsjIywR8sPNJIXBKOQAWb07daYt1YZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wanted (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1ICVgoJm0z28YdtCoO0vcJz33CX0EiCCP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wanted (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1dH_yzaZ_FsuU2VeZmOpJC03VidWv6kwz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Weka Invaders (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "183 KB",
    link1: "https://drive.google.com/file/d/1f4UagJRtLPfZEZUgwU8IMuegWeCoCbnG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where in the World is Carmen Sandiego (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1-5ZqLdthRdMZhFzVMCavL7PKpkweGgOS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1y4KFZU2r19D6BzpffedWU20EUDd9_Rid/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1EHNVW0Klm94KXA1e7QZoCyS8lOzpWZ61/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wing Warriors (USA) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1APR7XNg-XeZnewyTXMViDW8Q55xl4yic/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolf Child  (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1eCXU5pMZrYuT62wj0SCmowSBfbXa-fNi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1-Ihd9apLguhV6Ozcg_kNhhEhyRqYYuG_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (USA, Europe, Brazil) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1j23lCaPvgD2IVZxUsbKil7XyOgF5L559/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy III - The Dragon's Trap (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/16YQ7n4ChmdbPtilbC_F-G_n2ziuCBiIg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy III - The Dragon's Trap (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1DsBqtFXSYgWPV-EBXlrnSGmbXtI79wVN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy III - The Dragon's Trap (USA, Europe) (GOG) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1_YH_LY87mPkixocXahtHIpdkyEZSe3Uo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster Land (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1RqlqjY7JgacQTNIZZdEFv-tPGEGUU_KC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster Land (USA, Europe) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1ldCQ4atmKeDmV0UY9SZTnIwRsT8sGrkf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster World (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1Aad0mOGZNsSRRsmmiiTtbtC2hMpkQzqy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster World (ESP) (E) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1a3YaiFwHBLc2jtaAIpXGt6xxPE85TWg-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Pop (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1b1dH78mvUCPGPBsHIxVrNfDMWqYjtVWJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup Italia '90 (ESP) (EB) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1tH-PPsrp_R2apWEEsBawK5QgnMlztz9E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup Italia '90 (USA) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1Jbb8i3DjYRwws7BvUtGc0by_kv1nViHT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Games (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1b3dy2hBWhZR4SsfGWYeg5iM6ETUBmPVS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Grand Prix (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1XxEVHMShuRiilVfqL9XwzfG6l290yt3Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Grand Prix (USA, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1HD6CB8iVhCI2v8o9MsnL1aM_a3Q8gPDK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Grand Prix (USA, Brazil) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/16RhTbnJXr9_kZDZO7DpjDd2KH7HvB_da/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Soccer (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1I_WJZ86zV9t90VihhxwtjRHMFtXwSCjv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mojo World (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1SPFYznanIN-3aoxbA4XWrtKRNEbGjDzw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenon 2 (ESP) (E) (Image Works)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1O9rOz33JVBMvUiwFqqiLE8wH7Bbd7kbU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys - The Vanished Omens (USA, Europe) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1qFzdoSnAaihEt0iI1pY-RVjAlsgIimzh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys - The Vanished Omens ~ Y's (USA, Europe, Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1V6vYsXHE-qZwkBS5hHD_y4t9mH9kGfuN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zaxxon 3D (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1DmsBBJA4pkcyGtFIaM1YecxiTiJQd5Ya/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1OUx2fzzStqGlK0pRfCbbujyq1UYJSIy9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion (USA, Europe) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1NETtLRqA4yrCNFYCtcoMzKCYmwCwZE7b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion II - The Tri Formation (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1aBGi1AkQeTIECQZTgNb_KpnXn0jfe4yV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1oZyh3k5MOqjBOjtsO3peFw6qimk8hgT3/view?usp=drivesdk",
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

