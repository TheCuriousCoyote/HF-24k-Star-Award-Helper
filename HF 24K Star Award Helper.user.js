// ==UserScript==
// @name        HF 24k Star Estimate
// @author      TheCuriousCoyote
// @namespace   https://github.com/TheCuriousCoyote
// @version     1.0.0
// @description Calculates estimated posts and average daily posts needed to obtain the 24k Star Award in one year.
// @match       ://hackforums.net/awardgoals.php
// @copyright   2023+
// ==/UserScript==

// ------------------------------ SETTINGS ------------------------------
const awardThreshold = 24000;
// ------------------------------ SCRIPT ------------------------------

// Get 24k Star awardgoal card, then progress
const twentyfourkstarparentElement = $("i[title='24k Star']").parent().parent();
const twentyfourkstarElement = twentyfourkstarparentElement.length > 0 ? twentyfourkstarparentElement[0] : null;
const progress = twentyfourkstarElement ? $(twentyfourkstarElement).find(".percentage").text().replace('%', '') : 0;

// Calculate posts and differences
const estimatedPosts = Math.floor(awardThreshold * (progress / 100));
const remainingPosts = awardThreshold - estimatedPosts;

// Append results to card
$(twentyfourkstarparentElement).append($("<div>").text(`Posts Remaining: ~${remainingPosts}`));
$(twentyfourkstarparentElement).append($("<div>").text(`Avg Posts/Day: ${(remainingPosts / 365).toFixed(2)}`));
