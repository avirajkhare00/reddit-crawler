from moviepy.video.VideoClip import TextClip
from moviepy.audio.io.AudioFileClip import AudioFileClip
from moviepy.video.compositing.CompositeVideoClip import CompositeVideoClip


screensize = (720,460)

videoclip = TextClip('.',color='black', font="Amiri-Bold", fontsize=1)

videoclip = videoclip.set_duration(60)

videoclip = videoclip.set_audio(AudioFileClip('1665833609012.mp3'))

videoclip = CompositeVideoClip([videoclip], size=screensize)

videoclip.write_videofile("new_filename.mp4", fps=30, codec='libx264', audio_codec='aac', temp_audiofile='temp-audio.m4a', remove_temp=True)

