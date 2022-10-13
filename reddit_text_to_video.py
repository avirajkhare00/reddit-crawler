from moviepy.editor import *


screensize = (720,460)
text_clip_one = TextClip('Hello. My name is Aviraj Khare.',color='white', font="Amiri-Bold",
                   kerning = 5, fontsize=40)
text_clip_one = text_clip_one.set_duration(3)
cvc1 = CompositeVideoClip( [text_clip_one.set_pos('center')],
                        size=screensize)

text_clip_two = TextClip('I am from India.',color='white', font="Amiri-Bold",
                   kerning = 5, fontsize=50)
text_clip_two = text_clip_two.set_duration(3)
cvc2 = CompositeVideoClip( [text_clip_two.set_pos('center')],
                        size=screensize)

text_clip_three = TextClip('Thank You.',color='white', font="Amiri-Bold",
                   kerning = 5, fontsize=100)
text_clip_three = text_clip_three.set_duration(3)
cvc3 = CompositeVideoClip( [text_clip_three.set_pos('center')],
                        size=screensize)

final_clip = concatenate_videoclips([cvc1, cvc2, cvc3])

final_clip.write_videofile('chalja_bhai.mp4', fps=30, codec='libx264')
