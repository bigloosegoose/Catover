// Replace all images with random cat images from Cataas
const replaceWithCats = () => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        const width = img.naturalWidth || 300; // Default width if undefined
        const height = img.naturalHeight || 300; // Default height if undefined

        // Use Cataas to get random cat images with the "cute" tag
        const uniqueParam = `random=${Math.random()}`;
        const quotelist = [
            "You can do this!",
            "I believe in you!",
            "Keep pushing forward!",
            "You’re stronger than you think!",
            "Never give up!",
            "You are capable of amazing things.",
            "Believe in yourself and all that you are.",
            "Every day is a new beginning.",
            "The only limit is the one you set yourself.",
            "Take a deep breath, and start again.",
            "Progress, not perfection.",
            "Stay positive; you’ve got this!",
            "Failure is not the opposite of success—it’s part of the journey.",
            "Every small step counts.",
            "Keep moving forward, no matter what.",
            "Trust yourself; you are enough.",
            "You are braver than you believe.",
            "Hard times don’t last forever.",
            "You’ve made it through tough times before—you’ll do it again.",
            "Your efforts matter, even if they don’t feel big.",
            "Don’t stop until you’re proud.",
            "Just take it one step at a time.",
            "Good things take time; stay patient.",
            "You are more resilient than you realize.",
            "Stay strong; the best is yet to come.",
            "The road may be tough, but you’re tougher.",
            "Challenges are what make you grow.",
            "Don’t let fear hold you back.",
            "Keep climbing; the view is worth it.",
            "The sun always shines after the storm.",
            "Believe in your dreams and chase them.",
            "Your hard work will pay off.",
            "Small progress is still progress.",
            "Mistakes are proof that you’re trying.",
            "You’re doing better than you think.",
            "You’ve got the strength to overcome this.",
            "Take a moment to celebrate how far you’ve come.",
            "Focus on the step in front of you, not the whole staircase.",
            "You are the hero of your own story.",
            "Don’t let doubt dim your light.",
            "Success is built on persistence.",
            "You’ve got what it takes.",
            "The journey is just as important as the destination.",
            "Keep going; you are making a difference.",
            "Your potential is limitless.",
            "Don’t give up on yourself.",
            "Every great accomplishment starts with the decision to try.",
            "You are enough just as you are.",
            "The hardest part is starting—keep going!",
            "You are not alone; you’ve got support.",
            "When in doubt, keep moving forward.",
            "You’re making progress, even if it’s slow.",
            "Remember why you started.",
            "The best view comes after the hardest climb.",
            "You have the power to create change.",
            "Tough times build tough people.",
            "Growth happens outside of your comfort zone.",
            "Focus on what you can control.",
            "You are more powerful than you think.",
            "Every setback is a setup for a comeback.",
            "Be kind to yourself; you’re doing your best.",
            "The only way to fail is to stop trying.",
            "Courage doesn’t mean you don’t get afraid; it means you don’t let fear stop you.",
            "You are stronger than the struggle.",
            "Success is just around the corner.",
            "You’ve got this—keep going!",
            "Believe in your ability to make things happen.",
            "You’ve overcome so much already—don’t quit now.",
            "You’re closer than you think.",
            "You are worthy of success.",
            "Every challenge you face is an opportunity to grow.",
            "Keep showing up; it’s half the battle.",
            "You’re not defeated until you stop trying.",
            "Confidence is built one step at a time.",
            "Your dreams are valid.",
            "Stay focused on your goals.",
            "You’re writing your own success story.",
            "It’s okay to take breaks; just don’t stop.",
            "Believe in the magic of beginnings.",
            "Every expert was once a beginner.",
            "Take pride in how far you’ve come.",
            "Keep your eyes on the prize.",
            "You are your greatest asset.",
            "The only person you need to impress is yourself.",
            "Trust the process; it’s working.",
            "Strength grows in moments when you think you can’t go on but do.",
            "The best is yet to come—keep believing.",
            "You have everything you need to succeed.",
            "Be fearless in the pursuit of your goals.",
            "Every effort you make counts.",
            "You’re capable of more than you know.",
            "Keep your head high and your heart open.",
            "You are destined for great things.",
            "Challenges are just opportunities in disguise.",
            "You’re creating a brighter future.",
            "You are unstoppable.",
            "Perseverance always pays off.",
            "You are making progress, even when it’s hard to see.",
            "Your determination will take you far.",
            "You can achieve anything you set your mind to.",
            "Your potential is endless.",
            "You are deserving of all good things.",
            "You are stronger than you think.",
            "You are capable of amazing things.",
            "You are enough.",
            "You are worthy of love and respect.",
            "You are deserving of happiness.",
            "You are deserving of success.",
            "You are deserving of good things.",
            "You are deserving of peace.",
            "You are deserving of joy.",
            "You are deserving of kindness.",
            "You are deserving of compassion.",
            "meow",
            "purr",
            "hiss",
          ]

        const randomQuote = quotelist[Math.floor(Math.random() * quotelist.length)];
          
        const newSrc = `https://cataas.com/cat/cute?width=${width}&height=${height}&${uniqueParam}`; // Add width and height parameters for better image quality
        img.src = newSrc;
        img.srcset = `${newSrc} 1x, ${newSrc} 2x`; // Adjust for responsive images

        // Handle the load event to ensure the new image is loaded correctly
        img.onload = () => {
            img.width = width;
            img.height = height;
        };
    });
};

// Replace images on page load
replaceWithCats();

// Observe and replace dynamically added images (e.g., infinite scroll)
const observer = new MutationObserver(() => replaceWithCats());
observer.observe(document.body, { childList: true, subtree: true });

console.log('Content script loaded');