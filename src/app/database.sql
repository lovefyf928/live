drop database if exists twitch;
create database twitch;
use twitch;
create table user(
uid int primary key auto_increment,
phone varchar (30),
pwd varchar (30)
);
insert into user values (null,'18583673819','123456');
insert into user values (null,'xcs1234','123456');
insert into user values (null,'fyf1234','123456');
create table gameimgs(
pid int primary key auto_increment,
url varchar (100),
title varchar (100),
viewers int,
url1 varchar (100),
url2 varchar (100)
);
insert into gameimgs values (null ,'../assets/imgs/Fortnite-285x380.jpg','Fortnite',0,'','');
insert into gameimgs values (null,'../assets/imgs/League of Legends-285x380.jpg','League of Legends',0,'','');
insert into gameimgs values (null,'../assets/imgs/Hearthstone-285x380.jpg','Hearthstone',0,'','');
insert into gameimgs values (null,'../assets/imgs/IRL-285x380.jpg','IRL',0,'','');
insert into gameimgs values (null,'../assets/imgs/Monster Hunter World-285x380.jpg','Monster Hunter World',0,'','');
insert into gameimgs values (null,'../assets/imgs/Dota 2-285x380.jpg','Dota',0,'','');
insert into gameimgs values (null,'../assets/imgs/PLAYERUNKNOWN''S BATTLEGROUNDS-285x380.jpg','PLAYERUNKNOWN''S BATTLEGROUNDS',0,'','');
insert into gameimgs values (null,'../assets/imgs/Grand Theft Auto V-285x380.jpg','Grand Theft Auto V',0,'','');
insert into gameimgs values (null,'../assets/imgs/World of Warcraft-285x380.jpg','World of Warcraft',0,'','');
insert into gameimgs values (null,'../assets/imgs/Overwatch-285x380.jpg','Overwatch',0,'','');
insert into gameimgs values (null,'../assets/imgs/Counter-Strike_ Global Offensive-285x380.jpg','Counter-Strike_ Global Offensive',0,'','');


create table bg(
pid int primary key auto_increment,
live varchar (100),
Liveanchor varchar (20),
banner varchar (100),
people int,
Headportrait varchar (100),
gameclass varchar (100),
title varchar (60),
detail varchar (1000)
);
insert into bg values (null,null,'MCGamesDotNet','../assets/imgs/TwitchPartnerSpotlight_fp_14080.png',0,'../assets/imgs/mcgamesdotnet-profile_image-474888020b5ffeb0-150x150.jpeg','RocketLeague','Twitch Partner Spotlight','There are some amazing smaller broadcasters on Twitch, and we want these rising stars to have an opportunity to showcase what they''re all about. That''s where the Twitch Partner Spotlight comes in. Every week we choose an up-and-coming broadcaster for some guaranteed front page and social media exposure and help them share their talents with a wider audience.');
insert into bg values (null,null,'PlayOverwatch','../assets/imgs/0822_playoverwatch.png',0,'../assets/imgs/397c5a92be032502-profile_image-150x150.png','Overwatch','Overwatch Fan Festival','Overwatch Fan Festival is taking place on August 22 and 23 in Seoul, South Korea. Watch the livestream of the Fan Festival attended by many fans as well as some of the Overwatch developers including Jeff Kaplan.');
insert into bg values (null,null,'esamarathon','../assets/imgs/0819_esamarathon.png',0,'../assets/imgs/esamarathon-profile_image-cfce57f00db6dbd0-150x150.png','Hello Kitty: Roller Rescue','BSG Annual 2018','After a long year with a lot of events, BSG is holding their second week-long speedrunning marathon in order to raise money for the Dutch Cancer Foundation. Whether it''s Mario, Pokémon, GTA or Action Henk, BSG Annual showcases a week''s worth of games completed at blistering speed by some of the best speedrunners that Europe has to offer!');
insert into bg values (null,null,'RandomRambo','../assets/imgs/RRavatarsize140x78.png',0,'../assets/imgs/e24f75cc-47d7-4f0a-95db-051228947571-profile_image-150x150.png','IRL','RandomRambo','RandomRambo has gotten Global Elite 4 times with Pistol only in Counter-Strike: Global Offensive, and if that wasn''t enough it was all done SoloQueuing. Click here to watch and chat!');
insert into bg values (null,null,'SimCopter1','../assets/imgs/simcopter1-profile_image-e9de72f79a8662b0-150x150.jpeg',0,'../assets/imgs/simcopter1-profile_image-e9de72f79a8662b0-150x150.jpeg','Hearthstone','SimCopter1 Reporting Positive Vibes','Seeking a relaxing and positive place on Twitch? Come enjoy our wonderful community. You''re always welcome here! Click here to watch and chat!');
insert into bg values (null,null,'mackenseize','../assets/imgs/mackenseize_fpthumb_42015.png',0,'../assets/imgs/2236fcc2-ebbf-498b-95cf-b718882be57e-profile_image-150x150.png','Hearthstone','Seize the Day with Mackenseize','Mackenseize''s focus is on creating a fun, supportive and honest environment, while spreading epilepsy awareness, a condition she has suffered from for 6 years. Always engaging and ever-inspiring with a super community, if you''re looking for an awesome chat experience come visit her channel. Click here to watch and chat!');
insert into bg values (null,null,'BeyondTheSummit','../assets/imgs/139x78-promotion-logo.png',0,'../assets/imgs/f170344d-7a60-47fa-8be6-a74e803fcf12-profile_image-150x150.jpg','Dota 2','BeyondTheSummitTV','BeyondTheSummit is a pioneer for Dota 2 broadcasts in the Asia Pacific region and organizers of the Gigabyte Dota 2 Masters, and Oceanic Dota 2 League. By both organizing and providing coverage of events, BeyondTheSummit looks to bring professional quality and high entertainment to viewers and fans worldwide! Click here to watch all the action live!');
insert into bg values (null,null,'MajinPhil','../assets/imgs/maijinphil.png',0,'../assets/imgs/0de09c00bba9afd7-profile_image-150x150.png','Mega Man X6','The Legend of Zelda: Majora''s Mask Speedruns!','Phil is a speedrunner and casual gamer who loves to focus on chat interaction. On his channel you''ll find speedruns of The Legend of Zelda: Majora''s Mask and the Mega Man X series, as well as a variety of playthroughs. He provides a really laid back and welcoming stream, so definitely stop by his channel and say what''s up!');
