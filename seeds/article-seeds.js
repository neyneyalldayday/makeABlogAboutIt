const { Article } = require('../models');

const articleData = [
  {
    title: "i love rock music",
    article_body: "Rock music isn't just a genre; it's an emotion, a culture, and a force that has shaped generations across the globe. From its roots in the mid-20th century to its evolution into countless sub-genres, rock music has stood the test of time, leaving an indelible mark on the world of music and beyond.",
  },
  {
    title: "i love rock music",
    article_body: "One of the most remarkable aspects of rock music is its diversity. From the raw energy of classic rock bands like Led Zeppelin and The Rolling Stones to the rebellious spirit of punk rock icons like The Clash and Ramones, and the intricate melodies of progressive rock bands like Pink Floyd,",
  },
  {
    title: "i love rock music",
    article_body: "Rock music isn’t confined to concert halls or music festivals; it's a cultural phenomenon that has influenced fashion, art, and societal movements. It has been the anthem for social change, empowering generations to challenge norms and voice their opinions.",
  },
  {
    title: "i love rock music",
    article_body: "The legends of rock music stand as titans in the pantheon of musical history. Icons like Jimi Hendrix, Freddie Mercury, David Bowie, and Janis Joplin transcended mere musicianship; they became symbols of creativity, individuality, and artistic freedom.",
  },
  {
    title: "i love rock music",
    article_body: "While some may view rock music as a relic of the past, it continues to evolve and adapt to modern times. Contemporary rock bands infuse new elements, experiment with different sounds, and push boundaries while staying true to the essence of the genre.",
  },

];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
