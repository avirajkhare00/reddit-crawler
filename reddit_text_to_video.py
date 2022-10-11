import moviepy.editor as mp

my_video = mp.VideoFileClip("data/1.mov", audio=True)

w,h = moviesize = my_video.size

my_text = mp.TextClip("The Art of Adding Text on Video", font='Amiri-regular', color='white', fontsize=34)

txt_col = my_text.on_color(size=(my_video.w + my_text.w, my_text.h+5), color=(0,0,0), pos=(6,'center'), col_opacity=0.6)

txt_mov = txt_col.set_pos( lambda t: (max(w/30,int(w-0.5*w*t)),max(5*h/6,int(100*t))) )

final = mp.CompositeVideoClip([my_video,txt_mov])

final.subclip(0,17).write_videofile("data/text_add_result.mov",fps=24,codec='libx264')
