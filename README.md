# Adultz Bopz Final Project

## [Project Page](https://6859-sp21.github.io/final-project-adultz-bopz-fp/)

URL: [https://6859-sp21.github.io/final-project-adultz-bopz-fp/](https://6859-sp21.github.io/final-project-adultz-bopz-fp/)

## About

Nico Salinas, Shannen Wu, Jessica Yin

Dataset URL: [https://github.com/the-pudding/data/tree/master/kidz-bop](https://github.com/the-pudding/data/tree/master/kidz-bop)

## Installation

1. Locally clone the repository
2. Run `npm install` to install all node dependices
3. To test locally, run `npm start` and open a Chrome tab at `http://localhost:3000`

## Deployment

The deployed site is managed by GitHub Pages. To deploy this repo:

1. Run `npm run predeploy`
2. Run `npm run deploy`
3. Visit the deployed site at [https://6859-sp21.github.io/final-project-adultz-bopz-fp/](https://6859-sp21.github.io/final-project-adultz-bopz-fp/)

## Abstract

Censorship and lyric alterations in music is observed in many public media channels such as the radio, TV, film among others. Often, it’s easy to identify certain profane words and find a replace the word in the lyric to produce a “Clean” or “Radio Edit” of a song. However, in the case study of Kidz Bop, a brand known for making songs as kid friendly as possible, we can visualize these trends to understand how music is altered for young audience, and in some cases, can change the context of a lyric or complete remove it. Our interactive data visualization tools process a hierarchical data transformation to create trends and associations among songs, artists, and altered words found in our music.

## Development Process

For our Final Project, we chose to extend our work from A4, which created an interactive hiearchical data visualization to analyzes how songs by different artists are filtered.

### Nico

- Starting early setup for tree-map (with no interaction and animation).
- Used `d3.group` and `d3.rollup` to create a similar hiearchical data structure to build our treemap
- Separated raw dataset by using nonminal category field (six different fields in total). Treemap is actually categorized into three separate
- Started working on modal popup for treemap to show all data associated with a certain word in a certain year
- Introduced a profanity filter for treemap visualization (and applied it retroactively to bubble visualization).

### Shannen:

- Set up project to support React.
- Created functions to parse the raw data from the CSVs.
- Made the Bubble map aesthetic and the dropdown to search for artists.
- Helped set up the narrative for scrolly-telling.
- Implemented treemap for words.
- Created a year scroll to filter the data going into the treemap.

### Jessica:

- Created a tooltip that gives more context on how many times a word has been altered in Kidz Bop songs.
- Create the legend for the treemap that is sorted from the largest category of altered words to the least.
- Helped style the modal popup for the treemap to match the style for the popup in the bubble popup.
- Introduced a color legend for the bubble visualization
- Changed the color of word bubbles to match the legend.
