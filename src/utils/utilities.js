import * as d3 from "d3";
import profanity from "profanity-util";

export const CUTS_VERSE = "cuts verse";

export const COUNT_BY_YEAR = {
  "-1": {
    max: 89,
    min: 1
  },
  2001: {
    max: 1,
    min: 1,
  },
  2002: {
    max: 4,
    min: 1,
  },
  2003: {
    max: 3,
    min: 1,
  },
  2004: {
    max: 3,
    min: 1,
  },
  2005: {
    max: 2,
    min: 1,
  },
  2006: {
    max: 6,
    min: 1,
  },
  2007: {
    max: 8,
    min: 1,
  },
  2008: {
    max: 8,
    min: 1,
  },
  2009: {
    max: 9,
    min: 1,
  },
  2010: {
    max: 8,
    min: 1,
  },
  2011: {
    max: 5,
    min: 1,
  },
  2012: {
    max: 9,
    min: 1,
  },
  2013: {
    max: 11,
    min: 1,
  },
  2014: {
    max: 6,
    min: 1,
  },
  2015: {
    max: 13,
    min: 1,
  },
  2016: {
    max: 10,
    min: 1,
  },
  2017: {
    max: 11,
    min: 1,
  },
  2018: {
    max: 15,
    min: 1,
  },
  2019: {
    max: 32,
    min: 1,
  },
};

export const COLORS = {
  "alcohol & drugs": d3.scaleSequential(d3.interpolate("#88d4af",  "#00875A")).domain([1, 10]),
  identity: d3.scaleSequential(d3.interpolate("#99efff",  "#008ba5")).domain([1, 10]),
  sexual: d3.scaleSequential(d3.interpolate("#ffbbfe",  "#C054BE")).domain([1, 10]),
  profanity: d3.scaleSequential(d3.interpolate("#ffe5b0",  "#FFAB00")).domain([1, 10]),
  violence: d3.scaleSequential(d3.interpolate("#ffbeb0",  "#FF5630")).domain([1, 10]),
  other: d3.scaleSequential(d3.interpolate("#c2cfd8",  "#596066")).domain([1, 10]),
};


export const purify = (wordInput) => {
  return profanity.purify(wordInput)[0];
}