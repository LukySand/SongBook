export default SongArray = [
  {
    title: "Abre mis ojos oh Cristo",
    lyrics: [
      {
        type: "standard",
        Verse: [
          {
            text: "Abre mis ojos Oh Cristo,",
            chords: [{ note: "D", position: 0 }],
          },
          {
            text: "Abre mis ojos, Señor,",
            chords: [{ note: "A", position: 0 }],
          },
          {
            text: "yo quiero verte,",
            chords: [{ note: "G", position: 11 }],
          },
          {
            text: "yo quiero verte. [Repetir]",
            chords: [{ note: "D", position: 11 }],
          },
        ],
      },
      {
        type: "choir",
        Verse: [
          {
            text: "Quiero ver tu majestad",
            chords: [
              { note: "A", position: 7 },
              { note: "Bm", position: 19 },
            ],
          },
          {
            text: "brillando sobre toda la tierra,",
            chords: [
              { note: "Em", position: 1 },
              { note: "A", position: 26 },
            ],
          },
          {
            text: "sentir tu gran poder y amor,",
            chords: [
              { note: "A7", position: 1 },
              { note: "Bm", position: 25 },
            ],
          },
          {
            text: "yo quiero estar en tu presencia.",
            chords: [
              { note: "G", position: 13 },
              { note: "A", position: 26 },
            ],
          },
        ],
      },
      {
        type: "standard",
        Verse: [
          {
            text: "Santo, Santo, Santo,(Eres)",
            chords: [{ note: "D", position: 0 }],
          },
          {
            text: "Santo, Santo, Santo,(Eres)",
            chords: [{ note: "A", position: 0 }],
          },
          {
            text: "Santo, Santo, Santo,(Eres)",
            chords: [{ note: "G", position: 0 }],
          },
          {
            text: "Yo quiero verte.",
            chords: [{ note: "D", position: 11 }],
          },
        ],
      },
    ],
    number: 1,
  },

  {
    title: "Al comenzar la semana",
    lyrics: [
      {
        type: "standard",
        Verse: [
          {
            text: "Al comenzar la semana, ¡qué alegría que me da",
            chords: [
              { note: "G", position: 0 },
              { note: "C", position: 18 },
              { note: "G", position: 20 },
              { note: "D", position: 44 },
            ],
          },
          {
            text: "el estar en nuestra casa en este bello lugar!",
            chords: [
              { note: "D", position: 21 },
              { note: "D7", position: 25 },
              { note: "G", position: 42 },
            ],
          },
          {
            text: "Enlacemos nuestras manos para juntos alabar",
            chords: [
              { note: "G", position: 0 },
              { note: "C", position: 20 },
              { note: "G", position: 41 },
            ],
          },
          {
            text: "el nombre de Jesucristo, nuestro amigo más leal.",
            chords: [
              { note: "C7", position: 0 },
              { note: "G", position: 17 },
              { note: "Em", position: 25 },
              { note: "D", position: 40 },
              { note: "G", position: 46 },
            ],
          },
        ],
      },
    ],
    number: 2,
  },
];

const DefaultSong = {
  title: "Mi Titulo",
  lyrics: [
    {
      type: "standard",
      Verse: [
        { text: "primera estrofa", chords: [{ note: "C", position: 0 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Em", position: 6 }] },
      ],
    },
    {
      type: "choir",
      Verse: [
        { text: "coro letra", chords: [{ note: "C#5", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "D#7#9", position: 6 }] },
      ],
    },
    {
      type: "standard",
      Verse: [
        { text: "segunda estrofa", chords: [{ note: "D", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Gm7", position: 6 }] },
      ],
    },
    {
      type: "standard",
      Verse: [
        { text: "tercera estrofa", chords: [{ note: "Dmaj7", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Am/F", position: 9 }] },
      ],
    },
  ],
};
