from PIL import Image
import os
import glob

def optimize_images(directory):
    # Get all png and jpg images
    extensions = ['*.png', '*.jpg', '*.jpeg']
    files = []
    for ext in extensions:
        files.extend(glob.glob(os.path.join(directory, ext)))
    
    print(f"Found {len(files)} images to optimize in {directory}")

    for file_path in files:
        try:
            filename = os.path.basename(file_path)
            name, ext = os.path.splitext(filename)
            output_path = os.path.join(directory, f"{name}.webp")
            
            with Image.open(file_path) as img:
                # Resize if width > 800
                if img.width > 800:
                    ratio = 800 / img.width
                    new_height = int(img.height * ratio)
                    img = img.resize((800, new_height), Image.Resampling.LANCZOS)
                    print(f"Resized {filename} to 800x{new_height}")
                
                # Save as WebP
                img.save(output_path, 'WEBP', quality=85)
                
                original_size = os.path.getsize(file_path)
                new_size = os.path.getsize(output_path)
                savings = (original_size - new_size) / original_size * 100
                
                print(f"Optimized {filename}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({savings:.1f}% saved)")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    target_dir = "/Users/anasmohameed/Desktop/code pulse/public/images"
    optimize_images(target_dir)
