import re

# This function deletes all vowels from a given text, it uses regex to find vowels
# so that is replaced with an empty string. I used this approach since I commonly use Regex for
# different form validations. In this context, it is also useful to replace text thanks to 
# the re python library.
def delete_vowels(text):
    return re.sub(r'[aeiouAEIOU]', '', text)

if __name__ == "__main__":
    entry_text = input("Write some text to delete its vowels: ")
    result = delete_vowels(entry_text)
    print("Text without vowels:", result)
    
# To execute this code, you can use the command line and run the script with Python.
# python string_delete_vowels.py