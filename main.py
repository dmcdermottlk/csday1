def on_button_pressed_a():
    for value in list2:
        basic.show_number(value)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global list2
    list2 = [9, 6, 12, 6, 8]
input.on_button_pressed(Button.B, on_button_pressed_b)

list2: List[number] = []
list2 = []