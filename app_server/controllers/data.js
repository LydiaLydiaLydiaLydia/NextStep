/* GET home page */
const sightings = function(req, res){
    res.render('index', { 
        title: 'Next Step',
        pageHeader:{
            title: 'The Bigfoot Tracking App',
            strapline: 'Figure out his Next Step'
        },
        sightings: [{
            title: 'Old Copper Mine',
            username: 'FootFinder16',
            text: 'Bigfoot, also commonly referred to as Sasquatch, is a large and hairy human-like mythical creature said to inhabit forests in North America, particularly in the Pacific Northwest. Bigfoot is featured in both American and Canadian folklore, and since the mid-20th century has grown into a cultural icon, permeating popular culture and becoming the subject of its own distinct subculture.',
            time: '15:37 24 June 2024',
            distance: '250m',
            isVerified: true,
            profilePic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.renewinstitute.pl%2Fwp-content%2Fuploads%2F2022%2F03%2Fbeauty-portrait-ginger-woman-with-long-hair-posing-with-green-leaf-1-1-100x100-1.png&f=1&nofb=1&ipt=309edf12fdf12b0a6310536effa71a22ed5e318e1e72f3ce57fab78989a446e6&ipo=images",
            mainPic:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indy100.com%2Fmedia-library%2Fdramatic-footage-claims-to-show-new-sighting-of-bigfoot-so-do.jpg%3Fid%3D33440809%26width%3D1200%26height%3D600%26coordinates%3D0%252C100%252C0%252C101&f=1&nofb=1&ipt=4ccee9aab8897680e0d7944a489450ea54a0861175297c89c5f94242a3a4be09&ipo=images",
            bigPics: [
                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbigfootbase.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fbigfootbase-skunkape-myakka.jpg&f=1&nofb=1&ipt=0bef99aed2f6d9e145f915cc9d8d5557cdb1611f15471a4dec273fab6adb570e&ipo=images",
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Fcab617ec2802c2f1834af8114e8031529103a208%2Fc%3D0-101-595-437%2Flocal%2F-%2Fmedia%2F2016%2F09%2F14%2FUSATODAY%2FUSATODAY%2F636094493769555435-BigfootTweet.JPG%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&f=1&nofb=1&ipt=8d9fbe4e985bf7a6121c141556a5e7fe47f0ab37f4c288bcc155632dd9b8b4b4&ipo=images"
            ]
        },
        {
            title: 'Old Copper Mine',
            username: 'FootFinder16',
            text: 'Bigfoot, also commonly referred to as Sasquatch, is a large and hairy human-like mythical creature said to inhabit forests in North America, particularly in the Pacific Northwest. Bigfoot is featured in both American and Canadian folklore, and since the mid-20th century has grown into a cultural icon, permeating popular culture and becoming the subject of its own distinct subculture.',
            time: '15:37 24 June 2024',
            distance: '250m',
            isVerified: true,
            profilePic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.renewinstitute.pl%2Fwp-content%2Fuploads%2F2022%2F03%2Fbeauty-portrait-ginger-woman-with-long-hair-posing-with-green-leaf-1-1-100x100-1.png&f=1&nofb=1&ipt=309edf12fdf12b0a6310536effa71a22ed5e318e1e72f3ce57fab78989a446e6&ipo=images",
            mainPic:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indy100.com%2Fmedia-library%2Fdramatic-footage-claims-to-show-new-sighting-of-bigfoot-so-do.jpg%3Fid%3D33440809%26width%3D1200%26height%3D600%26coordinates%3D0%252C100%252C0%252C101&f=1&nofb=1&ipt=4ccee9aab8897680e0d7944a489450ea54a0861175297c89c5f94242a3a4be09&ipo=images",
            bigPics: [
                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbigfootbase.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fbigfootbase-skunkape-myakka.jpg&f=1&nofb=1&ipt=0bef99aed2f6d9e145f915cc9d8d5557cdb1611f15471a4dec273fab6adb570e&ipo=images",
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Fcab617ec2802c2f1834af8114e8031529103a208%2Fc%3D0-101-595-437%2Flocal%2F-%2Fmedia%2F2016%2F09%2F14%2FUSATODAY%2FUSATODAY%2F636094493769555435-BigfootTweet.JPG%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&f=1&nofb=1&ipt=8d9fbe4e985bf7a6121c141556a5e7fe47f0ab37f4c288bcc155632dd9b8b4b4&ipo=images"
            ]
        },
        {
            title: 'Old Copper Mine',
            username: 'FootFinder16',
            text: 'Bigfoot, also commonly referred to as Sasquatch, is a large and hairy human-like mythical creature said to inhabit forests in North America, particularly in the Pacific Northwest. Bigfoot is featured in both American and Canadian folklore, and since the mid-20th century has grown into a cultural icon, permeating popular culture and becoming the subject of its own distinct subculture.',
            time: '15:37 24 June 2024',
            distance: '250m',
            isVerified: true,
            profilePic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.renewinstitute.pl%2Fwp-content%2Fuploads%2F2022%2F03%2Fbeauty-portrait-ginger-woman-with-long-hair-posing-with-green-leaf-1-1-100x100-1.png&f=1&nofb=1&ipt=309edf12fdf12b0a6310536effa71a22ed5e318e1e72f3ce57fab78989a446e6&ipo=images",
            mainPic:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indy100.com%2Fmedia-library%2Fdramatic-footage-claims-to-show-new-sighting-of-bigfoot-so-do.jpg%3Fid%3D33440809%26width%3D1200%26height%3D600%26coordinates%3D0%252C100%252C0%252C101&f=1&nofb=1&ipt=4ccee9aab8897680e0d7944a489450ea54a0861175297c89c5f94242a3a4be09&ipo=images",
            bigPics: [
                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbigfootbase.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fbigfootbase-skunkape-myakka.jpg&f=1&nofb=1&ipt=0bef99aed2f6d9e145f915cc9d8d5557cdb1611f15471a4dec273fab6adb570e&ipo=images",
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Fcab617ec2802c2f1834af8114e8031529103a208%2Fc%3D0-101-595-437%2Flocal%2F-%2Fmedia%2F2016%2F09%2F14%2FUSATODAY%2FUSATODAY%2F636094493769555435-BigfootTweet.JPG%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&f=1&nofb=1&ipt=8d9fbe4e985bf7a6121c141556a5e7fe47f0ab37f4c288bcc155632dd9b8b4b4&ipo=images"
            ]
        }]
    });
};
module.exports = {
    sightings
};