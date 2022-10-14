from moviepy.video.tools.subtitles import SubtitlesClip
from moviepy.video.compositing.CompositeVideoClip import CompositeVideoClip
from moviepy.video.VideoClip import TextClip

screensize = (720,460)

generator = lambda txt: TextClip(txt, font='Georgia-Regular', fontsize=18, color='white')
sub = SubtitlesClip("subtitles.srt", generator)

text_clip_one = TextClip('hi',color='white', font="Amiri-Bold",
                   kerning = 5, fontsize=1)
text_clip_one = text_clip_one.set_duration(150)

final_video = CompositeVideoClip([text_clip_one.set_position("center", "bottom"), sub], size=screensize)

final_video.write_videofile("final.mp4", fps=30)