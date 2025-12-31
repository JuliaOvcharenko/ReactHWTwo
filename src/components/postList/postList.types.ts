export interface PostList{
    id: number
    avatar: string 
    author: string
    name: string
    description: string
    image: string
    likes: number
    tags: Tag[]
} 

export interface Tag{
    id: number
    name: string
}


export const tags: Tag[] = [
    {
        "id": 1,
        "name": "nature"
    },
    {
        "id": 2,
        "name": "politics"
    },
    {
        "id": 3,
        "name": "history"
    },
    {
        "id": 4,
        "name": "relationship"
    }
]


export const likes = ["greater 0", "greater 50", "greater 100"]

export const posts: PostList[] = [
    {
        "id": 1,
        "avatar": "https://cdn2.hubspot.net/hubfs/53/Pete%20Nicholls%20Avatar%20Circle%20256.png",
        "author": "Less",
        "name": "Why do you need history to learn politicy?",
        "description": `Without history, it's impossible to understand politics, because it explains the origins of modern decisions and conflicts. 
                        Past events shape how countries and societies respond to challenges today. History reveals why certain ideas gain strength 
                        while others fade. It helps us see the reasons behind long-standing confrontations and unexpected alliances. Without a historical foundation, 
                        politics appears as a collection of random actions. 
                        Only knowledge of the past reveals the logic of political behavior. Therefore, history remains the primary tool for understanding the modern world.`,
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/1963_march_on_washington.jpg",
        "likes": 6000, 
        "tags": [tags[1], tags[2]]
    },

    {
        "id": 2,
        "avatar": "https://lh3.googleusercontent.com/proxy/QJziLsGKdBl1jGflbFz572ayCwRCQSTF_e2khFw8cMSr4wttmfMl1fCXIdmdSz7iAGXlFS7bmDg9qMC7CD2ccO24mXe7V4A7yNEJ84A",
        "author": "Less2",
        "name": "Napoleon: Hero or Dictator?",
        "description": `A French person living in Napoleon’s time sees a country tired after years of revolution.
                        Napoleon seems like a savior because he brings order, clear laws, and stability to everyday life.
                        People feel safer and believe France is becoming strong again.
                        At the same time, some notice that he controls power more and more.
                        A modern person looks back and sees how much authority Napoleon had.
                        His rule limited freedom, and his wars brought great suffering to Europe.
                        Because of this, he is seen as a hero by people of his time and as a dictator by many today.`,
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/31/David_-_Napoleon_crossing_the_Alps_-_Malmaison1.jpg",
        "likes": 10000, 
        "tags": [tags[2]]
    },

    {
        "id": 3,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuvZ-dIhoPIjRrEuqMe3unBIQzNkUWL9-lw&s",
        "author": "Arane",
        "name": "The Strategist Who Changed Europe with Iron and Blood: Savior or Ambitious Ruler?",
        "description": `A German living in Otto von Bismarck’s time sees a country divided, weak, and uncertain after years of chaos.
                        Otto von Bismarck is a brilliant strategist who carefully unites Germany, using diplomacy, clever politics, and, when necessary, war.
                        The Franco-Prussian War shows his genius: he defeats France, strengthens the German states, and creates a sense of national pride and unity.
                        People cheer and feel hopeful because Germany finally becomes strong and respected across Europe.
                        He manages politics skillfully, balancing power between kings, governments, and other nations without destroying freedom completely.
                        A modern person sees that his strategies were complex and sometimes harsh, but they achieved lasting results and reshaped Europe’s balance of power.
                        People of his time may call him a hero and a genius strategist, and today historians recognize Otto von Bismarck as one of the most skillful political minds in history.`,
        "image": "https://eponym.ru/GaleryImages/2DVY7DK5ZR71F61T31DFPYJ80.jpg",
        "likes": 629, 
        "tags": [tags[2]]
    },

    {
        "id": 4,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjx5a4O5Ar5tGDF1er2QFBSELDAYCbVZoX2A&s",
        "author": "Oidra",
        "name": "Think about it - do you really want this life?",
        "description": `Big cities never stop. The streets are crowded, the noise is endless, and everyone is always in a rush.
                        People walk quickly, bumping into each other, frowning, and barely noticing anyone else.
                        Friends argue more, strangers glare, and even small mistakes make tempers flare.
                        Cafes are full, but the coffee can’t fix the tension in the air.
                        Smiles are rare, laughter is quiet, and people seem to carry their anger like a heavy bag.
                        The city doesn’t forgive, it pushes, it hurries, and slowly it changes everyone inside.
                        Think about it - do you really want this life?`,
        "image": "https://klev.club/uploads/posts/2023-10/1697481923_klev-club-p-kartinki-tolpa-lyudei-8.jpg",
        "likes": 10, 
        "tags": [tags[0], tags[3]]
    },
]