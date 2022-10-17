from moviepy.video.VideoClip import TextClip
from moviepy.audio.io.AudioFileClip import AudioFileClip
from moviepy.video.compositing.CompositeVideoClip import CompositeVideoClip
from moviepy.editor import concatenate_videoclips

screensize = (1920, 1080)

texts = [
    'I 25M have been dating this woman for a few months now, and honestly we get along really well.',
    'About a month ago, I met her for dinner one night at a semi-fancy restaurant around 6pm.',
    'She arrived a little bit late, and was really apologetic saying Oh gosh sorry.',
    'I probably smell so funky right now, I tried by best to wash and scrub but I know it wasnt enough.',
    'She was pretty stinky. She works as an animal caretaker at the zoo and had to stay late that night, so I understood.',
    'That night was the first night I really noticed her stinking of animals.',
    'It was strong at the same table something between old fish and a ferret cage, yuck and rather unappetizing, but not the sort of thing you could smell across the room, so I saw no reason it should ruin the dinner.',
    'So I tried to reassure her and said aw no you dont.',
    'She said Oh dont lie, theres no way I smell ok right now.',
    'So I said I mean I guess theres a slight smell, but it just shows you worked hard...Ive never been one of those weak-stomached guys whos going to complain about that, I really dont mind, honest, Im used to animal smells anyway.',
    'To my surprise her eyes lit up and she said Wow, really, youre serious?',
    'Thats so reassuring to hear, and starting opening up about how hard it was to make sure she always smelled good.',
    'That shed often have to scrub for half an hour after work to even be somewhat presentable and sometimes even that wasnt enough, changes of clothes and boots',
    'that she had to sometimes pick which days to schedule dates with me or run errands based around her off-days, or which animals shed be working with that day, to make sure the stink wasnt too bad...',
    'I said wow, I had no idea it was that tough. I asked how other keepers dealt with it and she said most were single or dated within the profession and it was rare to find someone like me who genuinely didnt mind!',
    'So I reassured her that yeah, she doesnt need to be overly concerned about that with me. I could tell it meant a lot to her.,But I think this turned out to be a big mistake...'
    'Over the past month, weve seen each other more often, and shes usually smelled okay, but there have been 4 or 5 occasions where shes smelled horrible. 10-20x worse than that night in the restaurant.',
    'These have been house dates and not at restaurants/etc. I have to breathe lightly to even try to stomach it, and it really kills my mood and leaves my house reeking.',
    'tl;dr Told my girlfriend she didnt have to worry about her smell so much, she took it as a major green flag due to her line of work, now I either have to really let her down or resign myself to living in olfactory hell',
    'So, what Im HEARING, is that once youre nose blind, you can have your pick of hot zookeepers.'
]

videoclips = []

for line in texts:
    videoclip = TextClip(line, color='white', font="Amiri-Bold", fontsize=24)
    videoclip = videoclip.set_position("bottom")
    videoclip = videoclip.set_duration(5)
    videoclips.append(videoclip)

final = concatenate_videoclips(videoclips)

videoclip = CompositeVideoClip([final], size=screensize)
videoclip = videoclip.set_audio(AudioFileClip('reddit_post_audio.mp3'))

videoclip.write_videofile("new_filename.mp4", fps=30, codec='libx264', audio_codec='aac', temp_audiofile='temp-audio.m4a', remove_temp=True)
videoclip.close()
