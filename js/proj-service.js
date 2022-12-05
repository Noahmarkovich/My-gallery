'use strict'


const gProjects = [
    {
     id: "book-store",
     name: "Book store",
     title: "Manage your book store effectively",
     desc: "I was asked to build a dynamic web book store which presents the books, their price and description.",
     url: "https://noahmarkovich.github.io/Book-shop-proj/",
     publishedAt: 1672696800000,
     labels: ["mvc", "keyboard events"],
    },
    {
     id: "touch-the-nums",
     name: "Touch the numbers",
     title: "Hit those numbers as fast as you can",
     desc: "A game I created in js vanila and basic css techniques at the early stages of the course",
     url: "https://noahmarkovich.github.io/proj-touch-the-nums/",
     publishedAt: 1671055200000,
     labels: ["game", "keyboard events"],
    },
    {
     id: "mine-sweeper",
     name: "Minesweeper",
     title: "Reveal the map without hitting the mines",
     desc: "lorem ipsum lorem ipsum lorem ipsum",
     url: "https://noahmarkovich.github.io/Minesweeper-project/",
     publishedAt: 1671832800000,
     labels: ["Matrixes", "keyboard events"],
    },
    {
     id: "in-picture",
     name: "In picture trivia game",
     title: "Name the celeb in the picture",
     desc: "lorem ipsum lorem ipsum lorem ipsum",
     url: "https://noahmarkovich.github.io/In-Picture-Game/",
     publishedAt: 1671051100000,
     labels: ["Matrixes", "keyboard events"],
    }
    ]

function getProjects() {
    return gProjects
}


function getProjectById(id){
    const project = gProjects.find(project => project.id === id)
    return project
}