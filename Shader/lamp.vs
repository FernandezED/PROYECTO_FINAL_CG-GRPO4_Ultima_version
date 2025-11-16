#version 330 core
layout (location=0) in vec3 aPos;
layout (location=1) in vec3 aColor;   // opcional
layout (location=2) in vec2 aTex;

uniform mat4 model, view, projection;

out vec2 TexCoords;
out vec3 VertColor;

void main() {
    TexCoords = aTex;
    VertColor = aColor;               // si no lo usas, puedes quitarlo
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
