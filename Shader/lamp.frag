#version 330 core
in vec2 TexCoords;
in vec3 VertColor;

uniform sampler2D ourTexture;

out vec4 FragColor;

void main() {
    vec4 tex = texture(ourTexture, TexCoords);
    // Si quieres teñir, usa vec3(VertColor) o un uniform tint:
    // tex.rgb *= VertColor;
    // O simplemente deja el color de la textura:
    FragColor = tex;                  // <- mantiene tex.a para el blending
    // OPCIONAL: “alpha test” para recortar halos en PNGs con bordes:
    // if (FragColor.a < 0.01) discard;
}
