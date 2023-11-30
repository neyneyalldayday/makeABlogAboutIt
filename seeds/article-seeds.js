const { Article } = require('../models');

const articleData = [
  {
    title: "i love rock music",
    article_body: "Rock music isn't just a genre; it's an emotion, a culture, and a force that has shaped generations across the globe. From its roots in the mid-20th century to its evolution into countless sub-genres, rock music has stood the test of time, leaving an indelible mark on the world of music and beyond.",
    user_id: 1
  },
  {
    title: "my aunts feet stink",
    article_body: "My aunt’s feet have this inexplicable talent for turning the air into a mystery zone! I swear they have their own fan club. Her feet could probably solve world peace by making people evacuate rooms faster than any emergency alarm. But hey, it's all part of her charm, and I’ve learned to appreciate the unique aura they bring to family gatherings",
    user_id:3
  },
  {
    title: "what is beer cheese",
    article_body: "Beer cheese is a delectable blend of creamy, tangy cheese and the rich, malty goodness of beer. This indulgent concoction harmoniously marries sharp cheddar or another cheese variety with the robust flavors of beer, resulting in a spreadable delight perfect for dipping pretzels, vegetables, or spreading on crackers. The cheese absorbs the beer’s depth, infusing it with a distinctively bold taste, while the creaminess tempers the beer’s bitterness, creating a balanced and irresistible combination that tantalizes the taste buds with each savory bite. Whether enjoyed as a dip at a casual gathering or as a flavorful condiment, beer cheese adds a delightful twist to any culinary experience.",
    user_id: 2
  },
  {
    title: "microphones",
    article_body: "Microphones, the unsung heroes of sound capture, come in a vast array of shapes, sizes, and types, each designed to embrace the nuances of sound in unique ways. These ingenious devices convert acoustic energy into electrical signals, preserving the raw essence of a voice or instrument. From the iconic dynamic microphones, sturdy and reliable on stage, to the sensitive condenser microphones, capturing intricate details in studio recordings, each microphone holds its own sonic fingerprint. Their diverse characteristics cater to different needs—some focus on clarity, while others accentuate warmth or robustness. Regardless of their form, microphones stand as silent witnesses, faithfully reproducing the vibrations that weave the fabric of our auditory world, ensuring that every whispered word or thunderous note is faithfully captured and immortalized.",
    user_id:1
  },
  {
    title: "destiny 2",
    article_body: "Destiny 2 the immersive and everevolving universe crafted by Bungie invites players into a mesmerizing realm teeming with adventure, camaraderie and epic battles Set against the backdrop of a sprawling solar system Guardians embark on a journey spanning diverse landscapes and celestial wonders from the shattered remnants of Earth to the exotic landscapes of distant planets The game intricately weaves a narrative that intertwines powerful storytelling with thrilling gameplay offering a dynamic blend of cooperative and competitive experiences. Whether delving into the gripping campaign banding together in fireteams to conquer challenging raids or engaging in adrenaline-pumping PvP battles Destiny 2 fosters a sense of community and excitement where players forge their legend and embrace the ongoing saga of light versus darkness in a visually stunning and constantly evolving universe",
    user_id: 2
  },

];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
