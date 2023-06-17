from tkinter import *
from tkinter import ttk

app = Tk()
app.geometry("1600x800")
frame = ttk.Frame(app,padding=10)
frame.pack()
ttk.Label(frame,text="Hello World").grid(column=0,row=0)
app.mainloop() 
# Path: Client\app.py